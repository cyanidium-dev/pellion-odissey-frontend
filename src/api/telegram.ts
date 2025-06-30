const baseUrl = "https://api.telegram.org/bot7610428993:AAEXNNqWEe91aK9_E9a29Q3yKGwmvhCVvh8/";

export const sendMessage = async (message: string): Promise<void> => {
  const url: string = `${baseUrl}sendMessage?chat_id=-1002573305600&text=${encodeURIComponent(message)}&parse_mode=HTML`;
  const response = await fetch(url);
  console.log("Response from Telegram API:", response);
};

