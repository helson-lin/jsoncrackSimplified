import type { Session, User } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { create } from "zustand";
import { supabase } from "src/lib/api/supabase";

interface UserActions {
  logout: () => void;
  setSession: (session: Session) => void;
}

interface UserStates {
  user: User | null;
  isAuthenticated: boolean;
}

const initialStates: UserStates = {
  user: null,
  isAuthenticated: false,
};

const useUser = create<UserStates & UserActions>()(set => ({
  ...initialStates,
  setSession: async session => {
    set({ user: session.user, isAuthenticated: true });
  },
  logout: async () => {
    toast.loading("Logging out...", { id: "logout" });

    const { error } = await supabase.auth.signOut({ scope: "local" });
    if (error) {
      toast.error("Failed to log out.");
      return;
    }

    set(initialStates);
    toast.success("Logged out.", { id: "logout" });
  },
}));

export default useUser;
