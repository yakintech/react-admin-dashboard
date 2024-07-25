import { useMemo } from "react"
import { useNavigate } from "react-router-dom"



export const useRouter = () => {
    const navigate = useNavigate()

    const router = useMemo(() => ({
        back: () => navigate(-1),
        forward: () => navigate(1),
        push: (path: string) => navigate(path),
        reload: () => window.location.reload
    }), [navigate])

    return router
}



