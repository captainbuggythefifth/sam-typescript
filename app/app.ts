import { APIGatewayEvent, Context, ProxyResult } from 'aws-lambda'

let response: ProxyResult

export const lambdaHandler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<ProxyResult> => {
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello world',
      }),
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}