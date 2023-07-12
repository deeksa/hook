// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  BackgroundContainer,
  ContentContainer,
  ButtonStyle,
  ButtonDiv,
  InputStyle,
  TextArea,
  Heading,
  UList,
  ListContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [NoteList, setList] = useState([])
  const [textArea, setArea] = useState('')
  const onTapAdd = e => {
    e.preventDefault()
    const obj = {
      id: uuidv4(),
      title,
      textArea,
    }
    setList(prevList => [...prevList, obj])
    setTitle('')
    setArea('')
  }
  const onChangeTextInput = e => {
    setTitle(e.target.value)
  }
  const onChangeTextArea = e => {
    setArea(e.target.value)
  }

  return (
    <BackgroundContainer>
      <Heading>Notes</Heading>
      <form onSubmit={onTapAdd}>
        <ContentContainer>
          <InputStyle
            type="text"
            placeholder="Title"
            onChange={onChangeTextInput}
            value={title}
          />
          <TextArea
            rows="5"
            placeholder="Take a Note..."
            onChange={onChangeTextArea}
            value={textArea}
          />
          <ButtonDiv>
            <ButtonStyle type="submit">Add</ButtonStyle>
          </ButtonDiv>
        </ContentContainer>
      </form>
      {NoteList.length === 0 ? (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <h1>No Notes Yet</h1>
          <p>Notes you add will appear here</p>
        </div>
      ) : (
        <ListContainer>
          <UList>
            {NoteList.map(e => (
              <NoteItem each={e} key={e.id} />
            ))}
          </UList>
        </ListContainer>
      )}
    </BackgroundContainer>
  )
}
export default Notes
