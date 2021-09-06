
import styled, {ThemeProvider} from "styled-components";

import {useSelector,useDispatch} from "react-redux";
import{switchTheme} from "../redux/action/themeActions";
import{lightTheme, darkTheme} from "./Theme";

export default function ThemeSwitcher() {
   const theme = useSelector((state) => state.themeReducer.theme)
    const dispatch = useDispatch()
    return (
        <ThemeProvider theme={theme}>
            <div>
                {theme.mode === 'light' ? (
                    <Button onClick={() => dispatch(switchTheme(darkTheme))}>
                        <ButtonText>Dark Theme</ButtonText>
                    </Button>
                ) : (
                    <Button onClick={() => dispatch(switchTheme(lightTheme))}>
                        <ButtonText> Light Theme</ButtonText>
                    </Button>
                )}

            </div>
        </ThemeProvider>
)
}

const Button = styled.button`
background-color: ${(props) =>props.theme.PRIMARY_BUTTON_COLOR};
padding: 6px 10px;
border-radius: 6px;
cursor: pointer;
`;

const ButtonText = styled.text`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) =>props.theme.PRIMARY_BUTTON_TEXT_COLOR};
`;

export const Container  = styled.div`
  background-color: ${(props) =>props.theme.PRIMARY_BACKGROUND_COLOR};
  
`;




