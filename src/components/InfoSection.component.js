import styled from 'styled-components';
import {
  ExtraHeadLine,
  FlexWrapper,
  MediumHeadLine,
  SplitLogo,
  SizedHeadLine,
} from '../utils/constants/styledComponentsGlobal.constant';
import split from '../assets/split.png';

function InfoSection() {
  return (
    <FlexWrapper backgroundColor='darkPurple' height='100vh' id='info'>
      <InfoWrapper flexDirection='column' alignItems='flex-end' width='auto'>
        <MediumHeadLine color='turquoise'>who?</MediumHeadLine>
        <SizedHeadLine dir='rtl' color='white' size={3}>
          צוותים של סטודנטים למדעי המחשב במכללה למנהל המעוניינים ליצור פרויקטים
          ולאתגר את עצמם.
        </SizedHeadLine>
        <MediumHeadLine color='turquoise'>when?</MediumHeadLine>
        <SizedHeadLine dir='rtl' color='white' size={3}>
          30-31.5.2021 ויום הכנה ב 23.5
        </SizedHeadLine>
        <MediumHeadLine color='turquoise'>where?</MediumHeadLine>
        <SizedHeadLine dir='rtl' color='white' size={3}>
          במכללה בהתאם להנחיות התו הסגול (גם ללא מחוסנים)
        </SizedHeadLine>
        <MediumHeadLine color='turquoise'>what?</MediumHeadLine>
        <SizedHeadLine dir='rtl' color='white' size={3}>
          בניית פרויקטים בצוותים בנושא שיפור חוויות הקנייה בדיגיטל.
        </SizedHeadLine>
      </InfoWrapper>
      <SectionHeadLine>
        <ExtraHeadLine>info</ExtraHeadLine>
        <SplitLogo src={split} />
      </SectionHeadLine>
    </FlexWrapper>
  );
}

const InfoWrapper = styled(FlexWrapper)`
  position: relative;
  left: 20rem;

  @media screen and (max-width: 550px) {
    left: 0;
    padding: 0 1.5rem;
  }
`;

const SectionHeadLine = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  transform: rotate(270deg) translateX(-20px);

  @media screen and (max-width: 550px) {
    position: absolute;
    transform: none;
    top: 2rem;
    left: 2rem;
  }
`;

export default InfoSection;
