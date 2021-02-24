import { Story, Meta } from '@storybook/react/types-6-0'
import CartDropDown, { CartDropDownProps } from '.'

import items from 'components/CartList/mock'

export default {
  title: 'CartDropDown',
  component: CartDropDown,
  args: {
    items,
    total: 'R$ 300,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartDropDownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropDown {...args} />
  </div>
)

export const Empty: Story<CartDropDownProps> = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropDown />
  </div>
)
