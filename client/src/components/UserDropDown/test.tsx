import { screen, render } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropDown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropDown username="Willian" />)

    expect(screen.getByText(/willian/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropDown username="Willian" />)

    // open menu
    userEvent.click(screen.getByText(/willian/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
