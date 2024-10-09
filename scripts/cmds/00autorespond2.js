const { utils } = global;
const p = utils.getPrefix(event.threadID)));

module.exports = {
  config: {
    name: "autorespondv4",
    version: "2.0.0",
    author: "Lorenzo",
    cooldowns: 5,
    role: 0,
    shortDescription: "Autoresponds with reactions and replies",
    longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
    category: "fun",
    guide: "-autorespondv2",
  },
  onStart: async ({ api, event }) => {
    // Blank onStart function as per the request
  },
  onChat: async ({ api, event }) => {
    const { body, messageID, threadID } = event;

    // Reactions based on words
    const emojis = {
      "😎": ["cool", "nice", "this bot is cool"],
      "😌": ["Videl", "Gerald", "Chan", "Max"],
      "💜": ["Hi", "hi", "Hello", "hello", "Hey", "hey", "HI", "HELLO", "HEY"],
      "💚": ["owner"],
      "😼": ["Jo", "Ariii", "talong", "galit"],
      "😹": ["pill", "laugh", "lt ", "gagi", "huy", "hoy"],
      "⏳": ["?prodia", "?sdxl", "?bardv3", "?tanongv2", "?imagine", "?genimg", "?Tanongv4", "?kamla", "?shortcut", "?help"],
      "🤖": ["bot","Bot"],
      "🖕": ["fak", "fuck", "mark Zuckerberg", "mark segx"],
    };

    // Replies to specific words
    const replies = {
      "max": "he is my owner",
      "@Videl Chan": "Tag him again and I'll punch you",
      "bot": "Hello, it's Mateo speaking\nPrefix: ${p} good to\n type help to see my cmds.",
      "hi": "hello, I'm Mateo Chatbot made by gerald",
      "Ai Who's your owner": "my owner is Gerald max, he loves coding things to me thanks to Romeo who helped him",
      "Owner": "owner is Gerald.",
      "I love you": "aww that's so nice of you.",
      "@Gerald Max": "hi, I think he's busy"
      "hello": "hi, I'm Mateo nice to meet you",
    };

    // React based on words
    for (const [emoji, words] of Object.entries(emojis)) {
      for (const word of words) {
        if (body.toLowerCase().includes(word)) {
          api.setMessageReaction(emoji, messageID, () => {}, true);
        }
      }
    }

    // Reply based on triggers
    for (const [trigger, reply] of Object.entries(replies)) {
      if (body.toLowerCase().includes(trigger)) {
        api.sendMessage(reply, threadID, messageID);
      }
    }
  },
};
    for (const [emoji, words] of Object.entries(emojis)) {
      for (const word of words) {
        if (body.toLowerCase().includes(word)) {
          api.setMessageReaction(emoji, messageID, () => {}, true);
        }
      }
    }

    // Reply based on triggers
    for (const [trigger, reply] of Object.entries(replies)) {
      if (body.toLowerCase().includes(trigger)) {
        api.sendMessage(reply, threadID, messageID);
      }
    }
  },
};
};eID);
      }
    }
  },
};essage(reply, threadID, messageID);
      }
    }
  },
};