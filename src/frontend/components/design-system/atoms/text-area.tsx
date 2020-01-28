import styled from 'styled-components'
import { space, fontSize, SpaceProps, FontSizeProps } from 'styled-system'
import { InputStyles } from './input'

export type TextAreaProps = SpaceProps | FontSizeProps

export const TextArea = styled.textarea<TextAreaProps>`
  ${InputStyles}
  ${space};
  ${fontSize};
`

TextArea.defaultProps = {
  px: 'default',
  py: 'default',
  fontSize: 'lg',
}
