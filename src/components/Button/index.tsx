import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onclick?: () => void
  children: string
  variant?: 'primary' | 'secundary'
}

const Button = ({
  type,
  title,
  to,
  onclick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onclick}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
