import React from "react";
import { LoadingOverlay } from "@mantine/core";
import styled from "styled-components";
import Editor, { loader, useMonaco } from "@monaco-editor/react";
import useConfig from "src/store/useConfig";
import useFile from "src/store/useFile";

loader.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs",
  },
});

const editorOptions = {
  formatOnPaste: true,
  formatOnType: true,
  minimap: {
    enabled: false,
  },
};

const getClipboardText = async (): Promise<string | null> => {
  try {
    const text = await navigator.clipboard.readText();
    return text;
  } catch (err) {
    console.error("Read clipboard error:", err);
    return null;
  }
};

const isJsonString = (data: string) => {
  try {
    JSON.parse(data);
    return true;
  } catch {
    return false;
  }
};

const TextEditor = () => {
  const monaco = useMonaco();
  const contents = useFile(state => state.contents);
  const setContents = useFile(state => state.setContents);
  const setError = useFile(state => state.setError);
  const jsonSchema = useFile(state => state.jsonSchema);
  const getHasChanges = useFile(state => state.getHasChanges);
  const theme = useConfig(state => (state.darkmodeEnabled ? "vs-dark" : "light"));
  const fileType = useFile(state => state.format);

  React.useEffect(() => {
    monaco?.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      allowComments: true,
      enableSchemaRequest: true,
      ...(jsonSchema && {
        schemas: [
          {
            uri: "http://myserver/foo-schema.json",
            fileMatch: ["*"],
            schema: jsonSchema,
          },
        ],
      }),
    });
  }, [jsonSchema, monaco?.languages.json.jsonDefaults]);

  React.useEffect(() => {
    const beforeunload = (e: BeforeUnloadEvent) => {
      if (getHasChanges()) {
        const confirmationMessage =
          "Unsaved changes, if you leave before saving  your changes will be lost";

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", beforeunload);

    return () => {
      window.removeEventListener("beforeunload", beforeunload);
    };
  }, [getHasChanges]);

  React.useEffect(() => {
    (document.activeElement as any)?.focus();
    getClipboardText().then((data: string | null) => {
      if (!data) return;
      if (!isJsonString(data)) return;
      setContents({ contents: data, skipUpdate: false });
    });
  }, [getHasChanges, setContents]);
  return (
    <StyledEditorWrapper>
      <StyledWrapper>
        <Editor
          height="100%"
          language={fileType}
          theme={theme}
          value={contents}
          options={editorOptions}
          onValidate={errors => setError(errors[0]?.message)}
          onChange={contents => setContents({ contents, skipUpdate: true })}
          loading={<LoadingOverlay visible />}
        />
      </StyledWrapper>
    </StyledEditorWrapper>
  );
};

export default TextEditor;

const StyledEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  user-select: none;
`;

const StyledWrapper = styled.div`
  display: grid;
  height: calc(100vh - 67px);
  grid-template-columns: 100%;
  grid-template-rows: minmax(0, 1fr);
`;
