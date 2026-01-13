const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Article = require('./models/Article');
const connectDB = require('./config/db');

dotenv.config();

const articles = [
    {
        title: 'The Future of AI in Daily Life',
        author: 'Jane Doe',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
        content: `Artificial Intelligence (AI) is rapidly evolving, permeating every aspect of our daily lives. It is no longer just a concept from science fiction movies or high-tech labs. From virtual assistants like Siri and Alexa to sophisticated recommendation algorithms on Netflix and Amazon, AI is everywhere, silently shaping our experiences.

The potential applications of AI are boundless and transformative. In healthcare, it is being used to diagnose diseases earlier and more accurately than human doctors, analyzing medical images with superhuman precision. In finance, it helps detect fraudulent transactions in milliseconds and manages complex investment portfolios. Even in creative fields, AI is generating breathtaking art, composing music, and writing code, challenging our traditional notions of creativity.

However, with great power comes great responsibility. The ethical implications of AI are vast and complex. Issues such as algorithmic bias, where AI systems inadvertently perpetuate societal prejudices, and the potential for significant job displacement as automation takes over routine tasks, must be carefully considered. Policy makers, technologists, and ethicists must work together to ensure that AI is developed and deployed responsibly.

One of the most exciting and rapidly advancing areas is Generative AI. This technology can create new content, including realistic text, images, and even video, from simple text prompts. Tools like ChatGPT and Midjourney are just the tip of the iceberg. They have the potential to revolutionize how we work, learn, and create, becoming powerful co-pilots in our intellectual and artistic endeavors.

But we must also be wary of the risks. The spread of misinformation, deepfakes, and the potential for misuse by malicious actors are real concerns. As we integrate these powerful tools into our society, we need robust safeguards and a literate public that can discern truth from fabrication.

As we stand on the brink of this new era, it is crucial that we educate ourselves about AI and its capabilities. It is not something to be feared, but a tool to be understood and mastered. Only then can we harness its full potential for the betterment of society, ensuring that the future of AI is a future that benefits us all.`
    },
    {
        title: 'Minimalism: A Guide to Simple Living',
        author: 'John Smith',
        image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2000&auto=format&fit=crop',
        content: `Minimalism is more than just a design aesthetic characterized by clean lines and neutral colors. It is a profound lifestyle choice that focuses on stripping away the unnecessary to make room for what truly matters. In a world that constantly bombards us with advertisements, notifications, and the relentless pressure to consume, minimalism offers a breath of fresh air and a path to freedom.

The journey often starts with decluttering your physical space. It's about looking at your possessions and asking, "Does this bring value to my life?" Donate clothes you haven't worn in a year, clear off your countertops, and organize your digital files. The act of letting go of physical clutter can have a surprisingly powerful effect on your mental clarity. You will be amazed at how much lighter you feel when your environment is calm and orderly.

But minimalism goes far beyond physical possessions. It also applies to your schedule and your mental space. It's about intentional living. Learn to say no to commitments that don't align with your values or bring you joy. Stop trying to keep up with the Joneses. Take time to disconnect from the endless scroll of social media and reconnect with nature, with your loved ones, and with yourself.

Living simply allows you to focus on your relationships, your passions, and your personal growth. It gives you the freedom to pursue the things that bring you true happiness, rather than chasing fleeting satisfaction through accumulation. It buys you time, energy, and financial freedom.

Ultimately, minimalism is not about deprivation; it's about abundance. It's about having more of what matters—more time, more peace, more purpose—by having less of what doesn't. It is a continuous process of refinement, a journey back to the essential self.

(Expanded Content for Reading Time Variance)

Consider the financial benefits of minimalism. By buying less, you save more. This financial cushion creates a sense of security and opens up opportunities for experiences rather than things. You might find yourself able to travel more, invest in a hobby, or even work less and spend more time with family. The cycle of consumerism is designed to keep us working to buy things we don't need to impress people we don't know. Minimalism breaks this cycle.

Moreover, the environmental impact of a minimalist lifestyle cannot be overstated. Every object we purchase has a carbon footprint attached to its production, transportation, and eventual disposal. By consuming less, we reduce our burden on the planet. It is a sustainable way of living that respects the finite resources of our Earth.

Emotional well-being is another significant beneficiary. A cluttered home often leads to a cluttered mind. Visual chaos can trigger stress hormones and make it difficult to relax. Conversely, a simplified environment promotes tranquility and focus. It becomes a sanctuary where you can recharge and find balance.

Minimalism is also a tool for self-discovery. When you strip away the layers of consumer identity, you are forced to confront who you really are and what you really want. It encourages introspection and helps you define your own version of success, independent of societal expectations. It is a path to authenticity.`
    },
    {
        title: 'Exploring the Deep Ocean',
        author: 'Emily White',
        image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2000&auto=format&fit=crop',
        content: `The ocean covers more than 70% of our planet, acting as the life support system for all living things. Yet, ironically, we know more about the surface of Mars than we do about the deep ocean. It is a vast, mysterious frontier right here on Earth—a world of pitch darkness, crushing pressure, and bizarre, alien-like creatures.

Recent expeditions using advanced submersibles and robotic vehicles have begun to peel back the curtain on this hidden world. They have revealed fascinating ecosystems around hydrothermal vents, where life thrives not on sunlight, but on chemical energy from the Earth's interior. Here, giant tube worms, ghostly octopuses, and bioluminescent jellyfish drift through the darkness, survivors in one of the most extreme environments on the planet.

The deep ocean plays a critical role in regulating Earth's climate. It absorbs a significant amount of the carbon dioxide we emit and traps excess heat, acting as a buffer against climate change. Understanding the complex physical and biological processes of the deep ocean is essential for predicting future climate scenarios and mitigating the impacts of human activity.

However, the deep ocean is under threat. Deep-sea mining, pollution, and climate change itself are putting these fragile ecosystems at risk before we have even fully explored them. Plastic waste has been found in the deepest trenches, a stark reminder of our global footprint.

As technology advances, we are able to explore deeper and longer than ever before. Every dive brings new discoveries, new species, and new questions. Who knows what secrets the deep ocean still holds? Perhaps cures for diseases, clues to the origins of life, or resources that could power our future. Exploring the deep ocean is not just about curiosity; it is about understanding our home and preserving the delicate balance of life on Earth.

(Deep Dive Extension)

Let's delve deeper into the technological marvels that enable this exploration. Human-occupied vehicles (HOVs) like the famous Alvin have been workhorses of deep-sea science for decades. Capable of carrying a pilot and two observers to depths of 4,500 meters (and now upgraded to 6,500 meters), Alvin allows scientists to see the seafloor with their own eyes. But the pressure at these depths is immense—over 10,000 pounds per square inch at the bottom of the Mariana Trench.

To go even deeper and stay longer, we rely on Remotely Operated Vehicles (ROVs). These tethered robots are controlled from a ship on the surface and can work tirelessly for days. Equipped with high-definition cameras and robotic arms, they can collect samples and capture stunning footage of creatures never before seen by human eyes. Autonomous Underwater Vehicles (AUVs) are another tool, programmed to map large areas of the seafloor using sonar, operating without a tether.

The biology of the deep is equally mind-blowing. Bioluminescence is the rule rather than the exception. In the absence of sunlight, creatures use light to hunt prey, attract mates, or distract predators. The anglerfish, with its glowing lure, is a classic example. Giant squids, once the stuff of legend, hunt in the gloom with eyes the size of dinner plates.

There is also the "marine snow"—a constant shower of organic debris falling from the productive surface waters. This detritus feeds a host of scavengers on the abyssal plain. Whale falls, the carcasses of dead whales that sink to the bottom, create ephemeral oases of life that can sustain specialized communities for decades.

The deep ocean is also a library of Earth's history. Sediment cores extracted from the seafloor contain layers of mud that date back millions of years. By analyzing the chemical composition and microfossils in these layers, scientists can reconstruct past climates, ocean circulation patterns, and even volcanic eruptions. It is a frozen record of our planet's past.

Protecting this final frontier is paramount. The International Seabed Authority regulates activities in international waters, but enforcement is challenging. Proposed deep-sea mining for polymetallic nodules—potato-sized rocks rich in manganese, nickel, cobalt, and copper—poses a significant threat. These nodules take millions of years to form and are habitat for unique biodiversity. Mining them could destroy these ecosystems and kick up sediment plumes that could smother sea life over vast areas.`
    },
    {
        title: 'The Art of Coffee Brewing',
        author: 'Michael Brown',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop',
        content: `Coffee is more than just a morning update; it is a ritual, a science, and an art form. For millions around the world, the day doesn't truly begin until that first sip of aromatic brew touches their lips. But there is a vast difference between a quick instant coffee and a perfectly brewed cup using artisanal beans.

To truly appreciate coffee, one must understand the journey of the bean. It starts with the terroir—the soil, climate, and altitude where the coffee berries are grown. From the high mountains of Ethiopia to the volcanic soils of Colombia, each region imparts a unique flavor profile. Then comes the processing and roasting, where the green beans are transformed into the brown, fragrant gems we know.

Brewing is the final, crucial step. It is where chemistry meets taste. The grind size, water temperature, and brew time all play a pivotal role in extraction. A coarse grind is perfect for a French Press, allowing for a full-bodied, robust flavor. A medium grind works wonders for a drip machine or a V60 pour-over, highlighting the coffee's clarity and acidity. And for the intense, concentrated shot of espresso, a fine, powdery grind is essential.

Experimenting with different brewing methods can be a rewarding hobby. The ritual of weighing the beans, heating the water to the precise degree, and watching the bloom as the water hits the grounds is a meditative practice. It forces you to slow down and pay attention to the details.

So next time you reach for your morning cup, take a moment to savor it. Smell the complex aromas, taste the subtle notes of fruit, chocolate, or nuts, and appreciate the journey that brought it to your cup. Coffee is a simple pleasure, but one that offers endless depth and discovery.`
    }
];

const importData = async () => {
    try {
        await connectDB();
        await Article.deleteMany();
        await Article.insertMany(articles);
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

importData();
