import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Eye, Clock, ChartNoAxesColumn,  } from "lucide-react";

const cardsSlider1 = [
  {
    icon: <Bell className="w-5 h-5" />,
    ayan: "Save",
    title: "We’ll be sending notifications to you here",
    input: true,
  },
  {
    icon: <ChartNoAxesColumn className="w-5 h-5"/>,
    ayan: true,
    title: "Notify me when any wallets move more than",
    input: "$1,000.00",
  },
  {
    icon:<Clock className="w-5 h-5"/>,
    ayan: true,
    title: "Notify me when any wallet dormant for > 30 days becomes active",
    input: null,
  },
];

const cardsSlider2 = [
  {
    author: "Jack F",
    role: "Ex Blackrock PM",
    quote:
      "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    author: "Yash P",
    role: "Research, 3poch Crypto Hedge Fund",
    quote:
      "I use Loch everyday now. I don't think I could analyze crypto whale trends and markets without it. I'm addicted!",
  },
  {
    author: "Shiv S",
    role: "Co-Founder Magik Labs",
    quote:
      "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
  },
];

export default function WhaleAlertPage() {
  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-red-500">
      <div className=" lg:w-1/2 bg-gradient-to-bl from-black via-blue-700 to-green-600 text-white flex flex-col justify-between space-y-8 py-5">
        <div className="flex gap-5 py-6 pl-6">
            <div className="w-1/2">
                <Bell className="mb-5" />
                <h4 className="text-[31px] font-[inter] leading-[1.2] mb-4">Get notified when a highly correlated whale makes a move</h4>
                <p>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
            </div>
           <div className="w-1/2 flex space-x-4 overflow-x-auto scrollbar-hide pb-2 pr-5">
          {cardsSlider1.map((card, i) => (
            <Card key={i} className="min-w-[250px] w-[250px] bg-[#ddd]">
              <CardContent className="p-4 flex flex-col flex-1 justify-between">
                <div className="flex justify-between">
                    {card.icon && <div className="mb-2">{card.icon}</div>}
                    {card.ayan === true && <input type="checkbox" className="w-4 h-4" checked/>}
                    {card.ayan}
                </div>
                <p className="text-sm mb-2 text-[14px] font-[inter]">{card.title}</p>
                <div>
                    {card.input === true && <Input placeholder="hello@gmail.com" />}
                {typeof card.input === "string" && <div className="text-xs text-gray-500">{card.input}</div>}
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>
        </div>


        <div className="flex flex-col p-6 md:flex-row items-start md:items-center md:space-x-6 space-y-4 md:space-y-0 md:gap-10">
          <img src="/Cohorts 1.svg" className="w-1/2"/>
          <div className="w-1/2 pr-5">
            <Eye className="justify-self-end" />
            <h2 className="text-[22px] leading-[1.2] md:text-[31px] font-normal font-inter">
              Watch what the whales are doing
            </h2>
            <p className="text-sm text-gray-300 mt-2 max-w-md">
              All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-end space-y-4 md:space-y-0 md:gap-10 pl-5">
          <img src="/Vector.svg" alt="" />
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide  pb-2 pr-5">
            {cardsSlider2.map((card, i) => (
              <Card key={i} className="min-w-[450px] w-[450px] bg-[#ddd] text-black rounded-md shadow flex-shrink-0">
                <CardContent className="p-4">
                  <p className="font-semibold">
                    {card.author}
                    <span className="text-gray-500 text-sm"> {card.role}</span>
                  </p>
                  <p className="text-sm mt-2">“{card.quote}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/*Right Section */}
      <div className=" lg:w-1/2 bg-white flex items-center justify-center p-6 md:p-10 text-black">
        <div className="w-full max-w-[365px]">
          <h3 className="text-3xl md:text-4xl font-normal mb-4 text-[#B0B1B3] font-inter">
            Sign up for exclusive access.
          </h3>
          <Input
            placeholder="Your email address"
            className="mb-4 px-6 py-5 placeholder:text-[#CACBCC] border border-[#E5E5E6]"
          />
          <Button className="w-full py-6 px-[28px] rounded-[8px] font-semibold font-inter">
            Get started
          </Button>
          <p className="text-sm mt-4 font-inter font-semibold text-[#19191A] text-center">
            You'll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </div>
  );
}
