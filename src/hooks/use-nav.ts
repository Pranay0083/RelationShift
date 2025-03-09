import { usePathname } from "next/navigation"
import path from "path"

export const usePaths = () => {
    const pathname = usePathname()
    const paths = pathname.split('/')
    let page = paths[paths.length - 1]
    return { page, pathname }
}