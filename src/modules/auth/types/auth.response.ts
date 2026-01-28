import type { User } from "@/types/user.entity";

//Login, Register, CheckStatus
export interface AuthResponse {
    user:  User;
    token: string;
}

