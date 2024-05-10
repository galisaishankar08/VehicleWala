import { NextResponse as res  } from "next/server";
import { WebClient, ErrorCode } from "@slack/web-api";

export async function POST(req: Request) {
    const { message } = await req.json();

    const token = process.env.NEXT_PUBLIC_SLACK_BOT_TOKEN;
    const channel = process.env.NEXT_PUBLIC_SLACK_CHANNEL as string;
    const web = new WebClient(token);

    const blocks = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": " Hi, I'm :ghost: *VehicleWala*"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": `Message:  ${message}`,
          "emoji": true
        }
      }
    ]

    try {
        await web.chat.postMessage({
            text: "Hello, I'm VehicleWala",
            blocks,
            channel
        });
        return res.json({ status: true, message: 'Message sent successfully'});
    } catch (error) {
        console.error('Error sending message:', error);
        res.json({ success: false, error: 'Failed to send message' });
    }
}
