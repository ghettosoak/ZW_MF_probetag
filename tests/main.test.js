// @vitest-environment happy-dom

import { assert, describe, expect, it } from 'vitest'

import { loadOrgs, getOrgs } from '../main'
// import { * } from '../main'

describe('main js', () => {


  // const buySpy = vi.spyOn(market, 'loadOrgs')
  // const element = document.createElement('div')

  expect(loadOrgs).toHaveBeenCalled()


  it('foo', () => {
    expect(1 + 1).toEqual(2)
    expect(true).to.be.true
  })

  it('bar', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})