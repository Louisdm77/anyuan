import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "https://relaxmed.com.ng" }));
const PIXEL_ID = "1078364124373677"; // your pixel ID
const ACCESS_TOKEN =
  "EAAL2ZC4BNeCcBPn5zbsjZBALQX9hqFO8VSY9jppZAOn8wDniIoMKYfZCT0J9OWZCzvkR6mk5JBave2djquuiQHm97Ifzx20gEEvZA5RJ3VSktbr9nhjb20HHgfsiCX7ZC0cpQtgXNfiVLHcPw9a84zdfyBZC9TnNH3jS5L3XmTB6bfThsqZB426NPXvRviuUvyICqNAZDZD"; //  access token here

app.post("/purchase", async (req, res) => {
  try {
    const eventData = {
      data: [
        {
          event_name: "Purchase",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: "https://relaxmed.com.ng",
          event_id: req.body.eventId,
          user_data: {
            client_ip_address: req.ip,
            client_user_agent: req.headers["user-agent"],
          },
          custom_data: {
            currency: "NGN",
            value: req.body.value || 1,
          },
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      }
    );

    const result = await response.json();
    console.log("✅ Meta Response:", result);
    res.json(result);
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).send("Error sending event to Meta");
  }
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`✅ Backend running on port ${process.env.PORT || 4000}`)
);
