import {useEffect} from 'react'

function useDocumntTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumntTitle