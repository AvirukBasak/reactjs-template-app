class Result<T> {
  private readonly value?: T
  private readonly error?: string

  constructor (value?: T, error?: string) {
    this.value = value
    this.error = error
  }

  static Ok<T> (value: T): Result<T> {
    return new Result<T>(value, undefined)
  }

  static Err<T> (error: string): Result<T> {
    return new Result<T>(undefined, error)
  }

  unwrap (): T {
    if (this.error) throw new Error(this.error)
    return this.value as T
  }

  unwrapErr (): string {
    if (!this.error) throw new Error('Result is Ok')
    return this.error
  }

  unwrapOr (defaultValue: T): T {
    if (this.error) return defaultValue
    return this.value as T
  }

  isOk (): boolean {
    return !this.error
  }

  isErr (): boolean {
    return !!this.error
  }

  onOk (callbk: (value: T) => void): this {
    if (!this.error) callbk(this.value as T)
    return this
  }

  onErr (callbk: (error: string) => void): this {
    if (this.error) callbk(this.value as string)
    return this
  }
}

export default Result
