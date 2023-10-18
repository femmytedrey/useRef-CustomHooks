import React, {useState} from 'react'
import useDocumntTitle from '../Hooks/useDocumntTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)

    useDocumntTitle(count)
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne