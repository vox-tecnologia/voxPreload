export class InputProperties {
  private _textLoading: string;
  private _textSuccess: string;
  private _textError: string;
  private _resultError: boolean;
  private _resultSuccess: boolean;

  public constructor() {
    this._textLoading = 'Carregando';
    this._textSuccess = 'Concluído';
    this._textError = 'Não encontrado';
  }

  public get textLoading(): string {
    return this._textLoading;
  }

  public set textLoading(textLoading: string) {
    this._textLoading = textLoading || this._textLoading;
  }

  public get textSuccess(): string {
    return this._textSuccess;
  }

  public set textSuccess(textSuccess: string) {
    this._textSuccess = textSuccess || this._textSuccess;
  }

  public get textError(): string {
    return this._textError;
  }

  public set textError(textError: string) {
    this._textError = textError || this._textError;
  }

  public get resultError(): boolean {
    return this._resultError;
  }

  public set resultError(resultError: boolean) {
    this._resultError = resultError;
  }

  public get resultSuccess(): boolean {
    return this._resultSuccess;
  }

  public set resultSuccess(resultSuccess: boolean) {
    this._resultSuccess = resultSuccess;
  }
}
