import Box from './Box'
import style from './showContainer.module.scss'
interface Props {
    text?: string;
}
const ShowContainer = ({text = ''}: Props) => {
    const wordsArr = text.split(' ');
    const numberOfWords = wordsArr.length;
    const getParagraph = () => {
        const ParaArr = text.split('\n');
        return ParaArr.length;
    }
  return (
    <div className={style.showContainer}>
        <Box measure={'Words'} value={numberOfWords}/>
        <Box measure={'Letters'} value={text.length - numberOfWords + 1}/>
        <Box measure={'Paragraphs'} value={getParagraph()}/>
    </div>
  )
}

export default ShowContainer