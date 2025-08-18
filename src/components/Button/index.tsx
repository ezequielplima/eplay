import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
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
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onclick}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
