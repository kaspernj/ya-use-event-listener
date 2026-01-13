describe("useEventListener", () => {
  let useEventListener

  beforeAll(async () => {
    ({default: useEventListener} = await import("../src/use-event-listener.js"))
  })

  it("exports a function", () => {
    expect(typeof useEventListener).toBe("function")
  })
})
