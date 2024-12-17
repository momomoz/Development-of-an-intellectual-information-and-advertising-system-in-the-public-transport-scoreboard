import { Delete, SquareArrowOutUpLeft, UserRoundPen } from 'lucide-react';
interface UserActionsProps {
    userId: number;
    isDarkMode: boolean;
}

export function UserActions({ userId, isDarkMode }: UserActionsProps) {
    const buttonStyles = `p-2 w-10 h-10 rounded transition duration-200 text-sm font-semibold`;

    return (
        <div className="flex justify-around">
            <button
                className={`${buttonStyles} ${isDarkMode
                        ? "bg-green-700 text-white hover:bg-green-600"
                        : "bg-green-500 text-white hover:bg-green-400"
                    }`}
                onClick={() => window.location.href = `/users/${userId}`}
            >
                <SquareArrowOutUpLeft />
            </button>
            <button
                className={`${buttonStyles} ${isDarkMode
                        ? "bg-blue-700 text-white hover:bg-blue-600"
                        : "bg-blue-500 text-white hover:bg-blue-400"
                    }`}
                onClick={() => window.location.href = `/users/${userId}/edit`}
            >
                <UserRoundPen />
            </button>
            <button
                className={`${buttonStyles} ${isDarkMode
                        ? "bg-red-700 text-white hover:bg-red-600"
                        : "bg-red-500 text-white hover:bg-red-400"
                    }`}
                onClick={() => window.location.href = `/users/${userId}/delete`}
            >
                <Delete />
            </button>
        </div>
    );
}
