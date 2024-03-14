export interface IResponseServices<GResponse = string> {
  info: {
    statusCode: number;
    message: string;
  };
  data?: GResponse;
}
