import LogoImg from '../assets/quiz-logo.png';
export function Header(){
    return(
    <header>
        <img src={LogoImg} alt='Quiz logo'/>
        <h1>React Quiz</h1>
    </header>
    );
}