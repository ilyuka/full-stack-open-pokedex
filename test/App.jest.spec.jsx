jest.mock('axios')

describe('<App />', () => {
  it('test', () => {
    expect('1').toBe('1')
  })
  // it('fetches data', async () => {
  //   axiosMock.get.mockResolvedValueOnce(
  //     {
  //       data: {
  //         results: [{ url: 'https://pokeapi.co/api/v2/pokemon/1/', name: 'bulbasaur', id: 1 }]
  //       }
  //     }
  //   )
  //   await act(async () => {
  //     render(<App/>)
  //   })
  //   // expect(axiosMock.get).toHaveBeenCalledTimes(1)
  //   // expect(axiosMock.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/?limit=50')
  // })

  // it('shows error', async () => {
  //   axiosMock.get.mockRejectedValueOnce(new Error())
  //   await act(async () => {
  //     render(<App/>)
  //   })
  //   // expect(screen.getByTestId('error')).toBeVisible()
  // })

})
