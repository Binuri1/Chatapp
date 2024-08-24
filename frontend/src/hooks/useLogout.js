import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);

        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            // Check if the response is not OK
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Logout failed');
            }

            // Logout successful, clear local storage and context
            localStorage.removeItem("chat-user");
            setAuthUser(null);

        } catch (error) {
            // Correctly handle the error message
            toast.error(error.message || 'An error occurred during logout');
        } finally {
            setLoading(false);
        }
    }

    return { loading, logout };
}

export default useLogout;
