import {
    QuestionContainer,
    ProgressContainer,
    ProgressBar,
    Header,
    Footer,
    QuestionBar,
    ContentBox
} from "./Survey.style";
import { StyledButton } from "../../components/index";
import { survey_data } from "./data";

export default function Survey({ phase, setPhase }) {
    const data = survey_data.filter((data) => data.num === phase);
    const [{ title, subtitle, questions, type }] = data;

    const moveToPreviousPhase = () => {
        setPhase(phase - 1);
    };

    const moveTonextPhase = () => {
        setPhase(phase + 1);
    };

    return (
        <>
            <QuestionContainer>
                <ProgressContainer>
                    <label htmlFor="survey">{phase} / 4</label>
                    <ProgressBar
                        id="survey"
                        max="100"
                        value={phase * 25}
                    ></ProgressBar>
                </ProgressContainer>
                <Header>
                    <h1>{title}</h1>
                    <h5>{subtitle && subtitle}</h5>
                </Header>
                <ContentBox>
                    {questions.map((item) => {
                        return (
                            <QuestionBar
                            // active={item.id === answers[type][0]}
                            // key={item.id}
                            >
                                <a
                                    href="#null"
                                    onClick={(evt) => saveFilter(evt, item.id)}
                                >
                                    <img src={item.icon} alt="Question icon" />
                                    <span>{item.text}</span>
                                </a>
                            </QuestionBar>
                        );
                    })}
                </ContentBox>
            </QuestionContainer>
            <Footer>
                <StyledButton handleClick={moveToPreviousPhase}>
                    이전
                </StyledButton>
                <StyledButton handleClick={moveTonextPhase}>다음</StyledButton>
            </Footer>
        </>
    );
}
