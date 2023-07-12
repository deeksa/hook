// Write your code here
import {NoteItemContainer} from './styledComponents'

const NoteItem = props => {
  const {each} = props
  return (
    <NoteItemContainer>
      <div>
        <h1>{each.title}</h1>
        <p>{each.textArea}</p>
      </div>
    </NoteItemContainer>
  )
}

export default NoteItem
