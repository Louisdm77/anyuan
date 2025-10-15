import express from "express";
import fetch from "node-fetch";
import cors from "cors";



const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://relaxmed.com.ng", 
  methods: ["GET","POST","OPTIONS"],
  credentials: true
}));
const PIXEL_ID = "2902999323225917"; //  pixel ID
const ACCESS_TOKEN = "EAAQQgZCFxoDIBPrpagInMbZCjLfihea7460KihapKSmCZCCs20iraTEwMC4AhqZCtUr2HTVykZCyuLthzttqZCQO2vLaxwHQkHAxLwVsErUqXeZApmGJeVokBmKu6MxIZB0qKuZBHAR0h7nJi3nVZBuNQmDQnobZBFBlBFWeH0HyUZAh8ytCzJBlX2zolDXu0h3rSCT2BAZDZD"; //  access token here

app.post("/purchase", async (req, res) => {
  try {
    const { value, eventID } = req.body;

    const eventData = {
      data: [
        {
          event_name: "Purchase",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_id: eventID, // 👈 Match browser event ID
          event_source_url: "https://relaxmed.com.ng/#order",
          user_data: {
            client_ip_address: req.ip,
            client_user_agent: req.headers["user-agent"],
          },
          custom_data: {
            currency: "NGN",
            value: value || 1,
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
  console.log(`✅ Backend running on port - ${process.env.PORT || 4000}`)
);

