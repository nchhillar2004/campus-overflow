import {
    Home,
    Cloud,
    Github,
    LifeBuoy,
    LogOut,
    UserPlus,
    Users,
    Newspaper,
    InfoIcon,
    MessageCircleQuestion,
} from "lucide-react";
import {
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export function MobileMenu() {
    const router = useRouter();
    const { data: session, update: sessionUpdate }: any = useSession();
    
    return (
        <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    <Home className="mr-2 h-4 w-4" />
                    <span>Home</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => {
                        router.push("/about");
                    }}
                >
                    <InfoIcon className="mr-2 h-4 w-4" />
                    <span>About</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => {
                        router.push("/questions");
                    }}
                >
                    <MessageCircleQuestion className="mr-2 h-4 w-4" />
                    <span>Questions</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => {
                        router.push("/posts");
                    }}
                >
                    <Newspaper className="mr-2 h-4 w-4" />
                    <span>Posts</span>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem
                    onClick={() => {
                        router.push("/u");
                    }}
                >
                    <Users className="mr-2 h-4 w-4" />
                    <span>Users</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Services</span>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem
                onClick={() => {
                    router.push("/help");
                }}
            >
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
            </DropdownMenuItem>
            {}
            {session?.user?.isAdmin ? (
                <DropdownMenuItem>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>Admin</span>
                </DropdownMenuItem>
            ) : (
                <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>Admin</span>
                </DropdownMenuItem>
            )}

            <DropdownMenuItem>
                <Cloud className="mr-2 h-4 w-4" />
                <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    );
}
