
import { Ride, Operator, Counter } from './types';

// Utility function to convert array to an object with IDs as keys, which is a Firebase best practice.
const arrayToObjectById = <T extends { id: number }>(arr: T[]): Record<number, Omit<T, 'id'>> => {
  return arr.reduce((acc, item) => {
    const { id, ...rest } = item;
    acc[id] = rest;
    return acc;
  }, {} as Record<number, Omit<T, 'id'>>);
};


export const RIDES_ARRAY: Ride[] = [
  { id: 1, name: 'Paintball', floor: '17th', imageUrl: 'https://picsum.photos/seed/1-Paintball/400/300' },
  { id: 2, name: 'Laser Maze', floor: '16th', imageUrl: 'https://picsum.photos/seed/2-LaserMaze/400/300' },
  { id: 3, name: 'VR Tank', floor: '16th', imageUrl: 'https://picsum.photos/seed/3-VRTank/400/300' },
  { id: 4, name: 'Jurassic Escape', floor: '16th', imageUrl: 'https://picsum.photos/seed/4-JurassicEscape/400/300' },
  { id: 5, name: 'Walk the Plank', floor: '16th', imageUrl: 'https://picsum.photos/seed/5-WalkthePlank/400/300' },
  { id: 6, name: 'Simulator Roller Coaster', floor: '16th', imageUrl: 'https://picsum.photos/seed/6-SimulatorRollerCoaster/400/300' },
  { id: 7, name: 'Fly Max', floor: '16th', imageUrl: 'https://picsum.photos/seed/7-FlyMax/400/300' },
  { id: 10, name: 'Laser Tag 1', floor: '15th', imageUrl: 'https://picsum.photos/seed/10-LaserTag1/400/300' },
  { id: 11, name: 'V of War', floor: '15th', imageUrl: 'https://picsum.photos/seed/11-VofWar/400/300' },
  { id: 12, name: 'VR Egg', floor: '15th', imageUrl: 'https://picsum.photos/seed/12-VREgg/400/300' },
  { id: 13, name: 'Shooter Walker 1', floor: '15th', imageUrl: 'https://picsum.photos/seed/13-ShooterWalker1/400/300' },
  { id: 14, name: 'Shooter Walker 2', floor: '15th', imageUrl: 'https://picsum.photos/seed/14-ShooterWalker2/400/300' },
  { id: 15, name: 'Jurassic Park', floor: '15th', imageUrl: 'https://picsum.photos/seed/15-JurassicPark/400/300' },
  { id: 16, name: 'Transformer Human Alliance', floor: '15th', imageUrl: 'https://picsum.photos/seed/16-TransformerHumanAlliance/400/300' },
  { id: 17, name: 'House of the Dead 2', floor: '15th', imageUrl: 'https://picsum.photos/seed/17-HouseoftheDead2/400/300' },
  { id: 18, name: 'Monster Eye 2', floor: '15th', imageUrl: 'https://picsum.photos/seed/18-MonsterEye2/400/300' },
  { id: 19, name: 'Walking Dead Shooting', floor: '15th', imageUrl: 'https://picsum.photos/seed/19-WalkingDeadShooting/400/300' },
  { id: 20, name: 'VR Motorcycle', floor: '14th', imageUrl: 'https://picsum.photos/seed/20-VRMotorcycle/400/300' },
  { id: 21, name: 'VR Racer', floor: '14th', imageUrl: 'https://picsum.photos/seed/21-VRRacer/400/300' },
  { id: 22, name: 'F1 Racer Max', floor: '14th', imageUrl: 'https://picsum.photos/seed/22-F1RacerMax/400/300' },
  { id: 23, name: 'Sea Adventure', floor: '14th', imageUrl: 'https://picsum.photos/seed/23-SeaAdventure/400/300' },
  { id: 24, name: 'F1 Racer', floor: '14th', imageUrl: 'https://picsum.photos/seed/24-F1Racer/400/300' },
  { id: 25, name: 'NFS Drifter 1', floor: '14th', imageUrl: 'https://picsum.photos/seed/25-NFSDrifter1/400/300' },
  { id: 26, name: 'NFS Drifter 2', floor: '14th', imageUrl: 'https://picsum.photos/seed/26-NFSDrifter2/400/300' },
  { id: 27, name: 'VR Horse Warrior', floor: '14th', imageUrl: 'https://picsum.photos/seed/27-VRHorseWarrior/400/300' },
  { id: 28, name: 'Speed Racer Blue', floor: '14th', imageUrl: 'https://picsum.photos/seed/28-SpeedRacerBlue/400/300' },
  { id: 29, name: 'Speed Racer Red', floor: '14th', imageUrl: 'https://picsum.photos/seed/29-SpeedRacerRed/400/300' },
  { id: 30, name: 'Sports Simulator 1', floor: '14th', imageUrl: 'https://picsum.photos/seed/30-SportsSimulator1/400/300' },
  { id: 31, name: 'Overtake VR', floor: '14th', imageUrl: 'https://picsum.photos/seed/31-OvertakeVR/400/300' },
  { id: 32, name: 'Extreme Snowboard 2', floor: '14th', imageUrl: 'https://picsum.photos/seed/32-ExtremeSnowboard2/400/300' },
  { id: 33, name: 'Robotic Roller Coaster 1', floor: '14th', imageUrl: 'https://picsum.photos/seed/33-RoboticRollerCoaster1/400/300' },
  { id: 34, name: 'Robotic Roller Coaster 2', floor: '14th', imageUrl: 'https://picsum.photos/seed/34-RoboticRollerCoaster2/400/300' },
  { id: 35, name: 'Monster Eye', floor: '14th', imageUrl: 'https://picsum.photos/seed/35-MonsterEye/400/300' },
  { id: 36, name: 'Mirror Maze', floor: '13th', imageUrl: 'https://picsum.photos/seed/36-MirrorMaze/400/300' },
  { id: 38, name: 'Escape room', floor: '13th', imageUrl: 'https://picsum.photos/seed/38-Escaperoom/400/300' },
  { id: 39, name: 'Dragon Hunter', floor: '13th', imageUrl: 'https://picsum.photos/seed/39-DragonHunter/400/300' },
  { id: 40, name: 'VR Space Tour 1', floor: '13th', imageUrl: 'https://picsum.photos/seed/40-VRSpaceTour1/400/300' },
  { id: 41, name: 'VR Space Tour 2', floor: '13th', imageUrl: 'https://picsum.photos/seed/41-VRSpaceTour2/400/300' },
  { id: 42, name: 'Pump it up 1', floor: '13th', imageUrl: 'https://picsum.photos/seed/42-Pumpitup1/400/300' },
  { id: 43, name: 'Pump it up 2', floor: '13th', imageUrl: 'https://picsum.photos/seed/43-Pumpitup2/400/300' },
  { id: 44, name: 'Speed Air Hockey', floor: '13th', imageUrl: 'https://picsum.photos/seed/44-SpeedAirHockey/400/300' },
  { id: 45, name: 'Starry Sky', floor: '13th', imageUrl: 'https://picsum.photos/seed/45-StarrySky/400/300' },
  { id: 46, name: 'Dance Baze', floor: '13th', imageUrl: 'https://picsum.photos/seed/46-DanceBaze/400/300' },
  { id: 47, name: 'Dance Central 3', floor: '13th', imageUrl: 'https://picsum.photos/seed/47-DanceCentral3/400/300' },
  { id: 48, name: 'Hologate 1', floor: '12th', imageUrl: 'https://picsum.photos/seed/48-Hologate1/400/300' },
  { id: 49, name: 'Hologate 2', floor: '12th', imageUrl: 'https://picsum.photos/seed/49-Hologate2/400/300' },
  { id: 50, name: 'Gyro VR 1', floor: '12th', imageUrl: 'https://picsum.photos/seed/50-GyroVR1/400/300' },
  { id: 51, name: 'Gyro VR 2', floor: '12th', imageUrl: 'https://picsum.photos/seed/51-GyroVR2/400/300' },
  { id: 52, name: 'HADO 1', floor: '12th', imageUrl: 'https://picsum.photos/seed/52-HADO1/400/300' },
  { id: 53, name: 'HADO 2', floor: '12th', imageUrl: 'https://picsum.photos/seed/53-HADO2/400/300' },
  { id: 54, name: 'Jurassic World', floor: '12th', imageUrl: 'https://picsum.photos/seed/54-JurassicWorld/400/300' },
  { id: 55, name: 'Kids Train', floor: '11th', imageUrl: 'https://picsum.photos/seed/55-KidsTrain/400/300' },
  { id: 56, name: 'Sea Saw', floor: '11th', imageUrl: 'https://picsum.photos/seed/56-SeaSaw/400/300' },
  { id: 57, name: 'Flower Tea cup', floor: '11th', imageUrl: 'https://picsum.photos/seed/57-FlowerTeacup/400/300' },
  { id: 58, name: 'Flowing Boat', floor: '11th', imageUrl: 'https://picsum.photos/seed/58-FlowingBoat/400/300' },
  { id: 59, name: 'Discotagada', floor: '11th', imageUrl: 'https://picsum.photos/seed/59-Discotagada/400/300' },
  { id: 60, name: 'Happy Spray Ball', floor: '11th', imageUrl: 'https://picsum.photos/seed/60-HappySprayBall/400/300' },
  { id: 61, name: 'Bumper Car', floor: '11th', imageUrl: 'https://picsum.photos/seed/61-BumperCar/400/300' },
  { id: 62, name: 'Rambo Machine Gun', floor: '11th', imageUrl: 'https://picsum.photos/seed/62-RamboMachineGun/400/300' },
  { id: 63, name: 'Hummer', floor: '11th', imageUrl: 'https://picsum.photos/seed/63-Hummer/400/300' },
  { id: 64, name: 'Batman 1', floor: '11th', imageUrl: 'https://picsum.photos/seed/64-Batman1/400/300' },
  { id: 65, name: 'Super Bike 1', floor: '11th', imageUrl: 'https://picsum.photos/seed/65-SuperBike1/400/300' },
  { id: 66, name: 'Power Truck', floor: '11th', imageUrl: 'https://picsum.photos/seed/66-PowerTruck/400/300' },
  { id: 67, name: 'MVP Basket Ball 1', floor: '11th', imageUrl: 'https://picsum.photos/seed/67-MVPBasketBall1/400/300' },
  { id: 68, name: 'MVP Basket Ball 2', floor: '11th', imageUrl: 'https://picsum.photos/seed/68-MVPBasketBall2/400/300' },
  { id: 69, name: 'Extreme Snowboard 1', floor: '11th', imageUrl: 'https://picsum.photos/seed/69-ExtremeSnowboard1/400/300' },
  { id: 70, name: 'Initial D6', floor: '10th', imageUrl: 'https://picsum.photos/seed/70-InitialD6/400/300' },
  { id: 71, name: 'Cosmos Bowling', floor: '10th', imageUrl: 'https://picsum.photos/seed/71-CosmosBowling/400/300' },
  { id: 72, name: 'Jumping House', floor: '10th', imageUrl: 'https://picsum.photos/seed/72-JumpingHouse/400/300' },
  { id: 73, name: 'Flying Chair', floor: '10th', imageUrl: 'https://picsum.photos/seed/73-FlyingChair/400/300' },
  { id: 74, name: 'Little plane', floor: '10th', imageUrl: 'https://picsum.photos/seed/74-Littleplane/400/300' },
  { id: 75, name: 'Ladybug Paradise', floor: '10th', imageUrl: 'https://picsum.photos/seed/75-LadybugParadise/400/300' },
  { id: 76, name: 'Samba Balloon', floor: '10th', imageUrl: 'https://picsum.photos/seed/76-SambaBalloon/400/300' },
  { id: 77, name: 'Bee Park 1', floor: '10th', imageUrl: 'https://picsum.photos/seed/77-BeePark1/400/300' },
  { id: 78, name: 'Bee Park 2', floor: '10th', imageUrl: 'https://picsum.photos/seed/78-BeePark2/400/300' },
  { id: 79, name: 'Love Sports 1', floor: '10th', imageUrl: 'https://picsum.photos/seed/79-LoveSports1/400/300' },
  { id: 80, name: 'Drummer Kids', floor: '10th', imageUrl: 'https://picsum.photos/seed/80-DrummerKids/400/300' },
  { id: 81, name: 'Dirty Driven', floor: '10th', imageUrl: 'https://picsum.photos/seed/81-DirtyDriven/400/300' },
  { id: 82, name: 'Storm Racer G', floor: '10th', imageUrl: 'https://picsum.photos/seed/82-StormRacerG/400/300' },
  { id: 83, name: 'Kids BasketBall 1', floor: '10th', imageUrl: 'https://picsum.photos/seed/83-KidsBasketBall1/400/300' },
  { id: 84, name: 'Kids BasketBall 2', floor: '10th', imageUrl: 'https://picsum.photos/seed/84-KidsBasketBall2/400/300' },
  { id: 85, name: 'Kids BasketBall 3', floor: '10th', imageUrl: 'https://picsum.photos/seed/85-KidsBasketBall3/400/300' },
  { id: 86, name: '3D Extreme Flight 2', floor: '10th', imageUrl: 'https://picsum.photos/seed/86-3DExtremeFlight2/400/300' },
  { id: 87, name: 'Space Travel', floor: '10th', imageUrl: 'https://picsum.photos/seed/87-SpaceTravel/400/300' },
  { id: 88, name: 'Dolphin Baby', floor: '10th', imageUrl: 'https://picsum.photos/seed/88-DolphinBaby/400/300' },
  { id: 89, name: 'Police Car', floor: '10th', imageUrl: 'https://picsum.photos/seed/89-PoliceCar/400/300' },
  { id: 90, name: 'TT Motor 1', floor: '10th', imageUrl: 'https://picsum.photos/seed/90-TTMotor1/400/300' },
  { id: 91, name: 'TT Motor 2', floor: '10th', imageUrl: 'https://picsum.photos/seed/91-TTMotor2/400/300' },
  { id: 92, name: 'Dark Space Ball', floor: '9th', imageUrl: 'https://picsum.photos/seed/92-DarkSpaceBall/400/300' },
  { id: 93, name: 'Softplay', floor: '9th', imageUrl: 'https://picsum.photos/seed/93-Softplay/400/300' },
  { id: 94, name: 'Inflatable Volcano', floor: '9th', imageUrl: 'https://picsum.photos/seed/94-InflatableVolcano/400/300' },
  { id: 95, name: 'Kids Trampoline', floor: '9th', imageUrl: 'https://picsum.photos/seed/95-KidsTrampoline/400/300' },
  { id: 96, name: 'Carousel 12 seat', floor: '9th', imageUrl: 'https://picsum.photos/seed/96-Carousel12seat/400/300' },
  { id: 97, name: 'Mini Pirate ship', floor: '9th', imageUrl: 'https://picsum.photos/seed/97-MiniPirateship/400/300' },
  { id: 98, name: 'Gyroscope', floor: '9th', imageUrl: 'https://picsum.photos/seed/98-Gyroscope/400/300' },
  { id: 99, name: 'Toddler Zone', floor: '9th', imageUrl: 'https://picsum.photos/seed/99-ToddlerZone/400/300' },
  { id: 100, name: 'Go Fishing 1', floor: '9th', imageUrl: 'https://picsum.photos/seed/100-GoFishing1/400/300' },
  { id: 101, name: 'Go Fishing 2', floor: '9th', imageUrl: 'https://picsum.photos/seed/101-GoFishing2/400/300' },
  { id: 102, name: 'Summer Time 1', floor: '9th', imageUrl: 'https://picsum.photos/seed/102-SummerTime1/400/300' },
  { id: 103, name: 'Summer Time 2', floor: '9th', imageUrl: 'https://picsum.photos/seed/103-SummerTime2/400/300' },
  { id: 104, name: 'Just Dance kids', floor: '9th', imageUrl: 'https://picsum.photos/seed/104-JustDancekids/400/300' },
  { id: 105, name: 'Island Hero', floor: '9th', imageUrl: 'https://picsum.photos/seed/105-IslandHero/400/300' },
  { id: 106, name: 'Tubin Twist', floor: '9th', imageUrl: 'https://picsum.photos/seed/106-TubinTwist/400/300' },
  { id: 107, name: 'Shooting Mania', floor: '9th', imageUrl: 'https://picsum.photos/seed/107-ShootingMania/400/300' },
  { id: 108, name: 'Operation Ghost', floor: '9th', imageUrl: 'https://picsum.photos/seed/108-OperationGhost/400/300' },
  { id: 109, name: 'Greedy snake', floor: '9th', imageUrl: 'https://picsum.photos/seed/109-Greedysnake/400/300' },
  { id: 110, name: 'Rainbow Paradise', floor: '9th', imageUrl: 'https://picsum.photos/seed/110-RainbowParadise/400/300' },
  { id: 111, name: 'Hopping Road Island', floor: '9th', imageUrl: 'https://picsum.photos/seed/111-HoppingRoadIsland/400/300' },
  { id: 112, name: 'Candy Car', floor: '1st', imageUrl: 'https://picsum.photos/seed/112-CandyCar/400/300' },
];

export const OPERATORS_ARRAY: Operator[] = [
  { id: 21700110, name: 'Anser Uddin' },
  { id: 21700111, name: 'Kayum Hossain' },
  { id: 21700148, name: 'Md.Rustom Ali' },
  { id: 21700250, name: 'Md.Rakib Hossain' },
  { id: 21700254, name: 'Md. Tarek khan' },
  { id: 21700336, name: 'Rakibul Islam Santo' },
  { id: 21800379, name: 'Md. Akidul Islam' },
  { id: 21801023, name: 'Md. Antaj Khan Rafsan' },
  { id: 21900062, name: 'Md. Songram Ali' },
  { id: 22200363, name: 'Md. Shohag Mia' },
  { id: 22200364, name: 'Md. Nurul Islam' },
  { id: 22200366, name: 'Mehedi Hasan' },
  { id: 22200367, name: 'Md. Shoyeb Hossain' },
  { id: 22200373, name: 'Md. Foysal' },
  { id: 22200377, name: 'Lemon Ritchil' },
  { id: 22200414, name: 'Rubel Miah' },
  { id: 22200968, name: 'Saiful Islam Tapu' },
  { id: 22200969, name: 'Md. Iqbal Hossan' },
  { id: 22200971, name: 'Sabbir Sheikh' },
  { id: 22201614, name: 'Sujon Miah' },
  { id: 22201615, name: 'Mir.Md.Kawsar' },
  { id: 22300887, name: 'Md. Ashikur Rahman' },
  { id: 22300888, name: 'Md. Sarowar Hosen Sani' },
  { id: 22300889, name: 'Md. Jihadul Islam' },
  { id: 22300890, name: 'Tajul Islam' },
  { id: 22300891, name: 'Md. Saikat Howlader' },
  { id: 22300892, name: 'Md.Rana' },
  { id: 22300873, name: 'Asadul Islam' },
  { id: 22300874, name: 'Said Al Fahim' },
  { id: 22300893, name: 'Md.Hazrot Ali' },
  { id: 22300881, name: 'Md.Mohiuddin Raju' },
  { id: 22300894, name: 'Md.Imran Hossen' },
  { id: 22300884, name: 'Md.Mohirul Islam' },
  { id: 22400253, name: 'Alif Bin Rahman Arnob' },
  { id: 22400663, name: 'Md.Sagor Ali' },
  { id: 22200420, name: 'Ahad Islam Borhan' },
  { id: 21700442, name: 'Meneka Rema' },
  { id: 22200388, name: 'Maria Akter' },
  { id: 22200389, name: 'Taniya Khatun' },
  { id: 22200390, name: 'Lima Akter' },
  { id: 22200392, name: 'Mahfuja Akter-1' },
  { id: 22200393, name: 'Aka Moni Akter' },
  { id: 22200394, name: 'Farzana Akter Popi' },
  { id: 22200400, name: 'Akhi Akter' },
  { id: 22200405, name: 'Taslima Nasrin' },
  { id: 22200410, name: 'Rabeya Akter' },
  { id: 22200972, name: 'Amena Akter' },
  { id: 22200976, name: 'Motia Sultana' },
  { id: 22300858, name: 'Sathi Akter' },
  { id: 22300859, name: 'Chandona Falguni' },
  { id: 22300860, name: 'Rally Chakma' },
  { id: 22300861, name: 'Salma Akter' },
  { id: 22300864, name: 'Nazma Akter' },
  { id: 22400254, name: 'Taslima Akter' },
  { id: 22401018, name: 'Farhana Akter Mou' },
  { id: 22401019, name: 'Sanjida Akter' },
  { id: 22501155, name: 'Kethi Nekola' },
  { id: 22501156, name: 'Md. Hasibur Rahman' },
  { id: 22501157, name: 'Faysal Ahammed Emon' },
  { id: 22501158, name: 'Uzzal Sarder' },
  { id: 22501159, name: 'Tania Akter' },
  { id: 22501160, name: 'Sayed Shahriar Naved Deep' },
  { id: 95110479, name: 'Md. Biplob Alom' },
  { id: 95110370, name: 'Morsaline Mollah' },
  { id: 95110850, name: 'Shiuli Khatun' },
  { id: 95110399, name: 'Zobaida' },
  { id: 95110402, name: 'Akhinur Begum' },
  { id: 95110465, name: 'Rikta Akter' },
  { id: 95110702, name: 'Fahima Kobir' },
  { id: 95110401, name: 'Lipi Akter' },
  { id: 95110967, name: 'Farida Akter' },
];

export const TICKET_SALES_PERSONNEL_ARRAY: Operator[] = [
  { id: 22200425, name: 'Moriom Akter' },
  { id: 22200428, name: 'Md. Shawon Ali Shek' },
  { id: 22201973, name: 'Md. Maruf' },
  { id: 22200607, name: 'Abu Taher' },
  { id: 22300856, name: 'Mahamudul Hasan' },
  { id: 22200335, name: 'Sumaiya Sharmin Tiha' },
  { id: 22301496, name: 'A. Rahman Nayeem' },
  { id: 22301495, name: 'Samia Akter Mim' },
  { id: 22200395, name: 'Bithi Akter' },
  { id: 22300862, name: 'Happy Akter' },
  { id: 22200962, name: 'Abdullah Shajib' },
  { id: 22200401, name: 'Jannatul Ferdous' },
  { id: 21801025, name: 'Md. Mainuddin Chokder' },
  { id: 22200966, name: 'Md. Ferdaus' },
  { id: 21801029, name: 'Rumjhum Nokrek' },
  { id: 22500734, name: 'Uday Chandra' },
  { id: 22500733, name: 'Md.Arifuzzaman' },
  { id: 22200370, name: 'Md. Jhohirul Islam' },
  { id: 22201975, name: 'Sumaiya Chowdhury' },
  { id: 22200423, name: 'Afsi Kongkon' },
  { id: 22200602, name: 'Lima Parvin' },
];

export const COUNTERS_ARRAY: Counter[] = [
    { id: 1, name: 'L-1, North (Attrium)', location: 'Level-1, TFW Booth' },
    { id: 2, name: 'L-1, South (Attrium)', location: 'Level-1, TFW Booth' },
    { id: 3, name: 'Tower Part Counter-1', location: 'Tower Part (Beside Aarong)' },
    { id: 4, name: 'Tower Part Counter-3', location: 'Tower Part (Beside Aarong)' },
    { id: 5, name: 'Tower Part Counter-2 (Online)', location: 'Tower Part (Beside Aarong)' },
    { id: 6, name: 'Basement Counter-1', location: 'Basement -1' },
    { id: 7, name: 'Level-8 Counter-1', location: 'Level-8' },
    { id: 8, name: 'Level-8 Counter-2', location: 'Level-8' },
    { id: 9, name: 'Level-8 Counter-3', location: 'Level-8' },
    { id: 10, name: 'Level-8 Counter-4', location: 'Level-8' },
    { id: 11, name: 'Level-8 Counter-1 (Online)', location: 'Level-8' },
    { id: 12, name: 'Level-9 Counter-1', location: 'Level-9' },
    { id: 13, name: 'Level-10 Counter-1', location: 'Level-10' },
    { id: 14, name: 'Cosmos Bowling Counter', location: 'Cosmos Bowling' },
    { id: 15, name: 'Level-11 Counter-1', location: 'Level-11' },
    { id: 16, name: 'Level-12 Counter-1', location: 'Level-12' },
    { id: 17, name: 'Level-13 Counter-1', location: 'Level-13' },
    { id: 18, name: 'Level-14 Counter-1', location: 'Level-14' },
    { id: 19, name: 'Level-15 Counter-1', location: 'Level-15' },
    { id: 20, name: 'Level-16 Counter-1', location: 'Level-16' },
    { id: 21, name: 'Level-17 Counter-1', location: 'Level-17' }
];

export const RIDES = arrayToObjectById(RIDES_ARRAY);
export const OPERATORS = arrayToObjectById(OPERATORS_ARRAY);
export const TICKET_SALES_PERSONNEL = arrayToObjectById(TICKET_SALES_PERSONNEL_ARRAY);
export const COUNTERS = arrayToObjectById(COUNTERS_ARRAY);

export const SECURITY_FLOORS = [
    '1st', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th'
];

const uniqueFloors = [...new Set(RIDES_ARRAY.map(ride => ride.floor))];
const floorOrder = ['17th', '16th', '15th', '14th', '13th', '12th', '11th', '10th', '9th', '1st'];

export const FLOORS = [...uniqueFloors].sort((a, b) => {
    const indexA = floorOrder.indexOf(a);
    const indexB = floorOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
});
export const LOGO_BASE64 = "data:image/png;base64,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--- START OF FILE components/DailyRoster.tsx ---


import React, { useMemo } from 'react';
import { Ride, Operator, AttendanceRecord, RideWithCount } from '../types';
import { Role } from '../hooks/useAuth';
import BriefingCheckin from './BriefingCheckin';
import Counter from './Counter';

type View = 'counter' | 'reports' | 'assignments' | 'expertise' | 'roster';
type Modal = 'edit-image' | 'ai-assistant' | 'operators' | 'backup' | null;

interface DailyRosterProps {
  rides: RideWithCount[];
  operators: Operator[];
  dailyAssignments: Record<string, Record<string, number[] | number>>;
  selectedDate: string;
  onDateChange: (date: string) => void;
  role: Exclude<Role, null>;
  currentUser: Operator | null;
  attendance: AttendanceRecord[];
  onNavigate: (view: View) => void;
  onCountChange: (rideId: number, newCount: number) => void;
  onShowModal: (modal: Modal, ride?: Ride) => void;
  hasCheckedInToday: boolean;
  onClockIn: (attendedBriefing: boolean, briefingTime: string | null) => void;
  isCheckinAllowed: boolean;
}

interface RosterData {
  assignmentsByOperator: Map<number, RideWithCount[]>;
  unassignedRides: RideWithCount[];
  operatorsWithAttendance: (Operator & { attendance: AttendanceRecord | null; })[];
  presentCount: number;
  absentCount: number;
}

const DailyRoster: React.FC<DailyRosterProps> = ({ rides, operators, dailyAssignments, selectedDate, onDateChange, role, currentUser, attendance, onNavigate, onCountChange, onShowModal, hasCheckedInToday, onClockIn, isCheckinAllowed }) => {
  const formatTime = (timeStr: string | null): string => {
      if (!timeStr) return '';
      const [hours, minutes] = timeStr.split(':');
      let h = parseInt(hours, 10);
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12;
      h = h ? h : 12; // the hour '0' should be '12'
      return `${h}:${minutes} ${ampm}`;
  };

  const { assignmentsByOperator, unassignedRides, operatorsWithAttendance, presentCount, absentCount } = useMemo<RosterData>(() => {
    const assignmentsToday: Record<string, any> = dailyAssignments[selectedDate] || {};
    const rideMap = new Map<string, RideWithCount>();
    rides.forEach(r => rideMap.set(r.id.toString(), r));
    
    const assignmentsByOperator = new Map<number, RideWithCount[]>();
    const assignedRideIds = new Set<string>();

    for (const [rideId, operatorIdValue] of Object.entries(assignmentsToday)) {
        const ride = rideMap.get(rideId);
        if (ride) {
          const operatorIds = Array.isArray(operatorIdValue) ? operatorIdValue : [operatorIdValue];
          operatorIds.forEach((operatorId: number) => {
            const operatorRides = assignmentsByOperator.get(operatorId);
            if (operatorRides) {
              operatorRides.push(ride);
            } else {
              assignmentsByOperator.set(operatorId, [ride]);
            }
          });
          assignedRideIds.add(rideId);
        }
    }
    
    for (const rideList of assignmentsByOperator.values()) {
      rideList.sort((a, b) => a.name.localeCompare(b.name));
    }

    const unassignedRides = rides
        .filter(r => !assignedRideIds.has(r.id.toString()))
        .sort((a, b) => a.name.localeCompare(b.name));
    
    const attendanceTodayMap = new Map<number, AttendanceRecord>();
    attendance
      .filter(record => record.date === selectedDate)
      .forEach(record => attendanceTodayMap.set(record.operatorId, record));

    const relevantOperators = (role === 'operator' && currentUser)
        ? operators.filter(op => op.id === currentUser.id)
        : operators;

    const operatorsWithAttendance = relevantOperators.map(op => ({
      ...op,
      attendance: attendanceTodayMap.get(op.id) || null
    })).sort((a, b) => {
        if (a.attendance && !b.attendance) return -1;
        if (!a.attendance && b.attendance) return 1;
        return a.name.localeCompare(b.name);
    });

    const presentCount = operatorsWithAttendance.filter(op => op.attendance).length;
    const absentCount = operatorsWithAttendance.length - presentCount;

    return { assignmentsByOperator, unassignedRides, operatorsWithAttendance, presentCount, absentCount };
  }, [dailyAssignments, selectedDate, rides, operators, attendance, role, currentUser]);
  
  const operatorExpertise = useMemo<{ name: string; count: number }[]>(() => {
    if (role !== 'operator' || !currentUser) {
        return [];
    }
    const rideIdToNameMap = new Map(rides.map(r => [r.id.toString(), r.name]));
    const operatedRidesCount = new Map<string, number>();

    for (const dayAssignments of Object.values(dailyAssignments)) {
        for (const [rideId, operatorIdValue] of Object.entries(dayAssignments as Record<string, number[] | number>)) {
            const operatorIds = Array.isArray(operatorIdValue) ? operatorIdValue : [operatorIdValue];
            if (operatorIds.includes(currentUser.id)) {
                const rideName = rideIdToNameMap.get(rideId);
                if (rideName) {
                    operatedRidesCount.set(rideName, (operatedRidesCount.get(rideName) || 0) + 1);
                }
            }
        }
    }

    return Array.from(operatedRidesCount.entries())
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => a.name.localeCompare(b.name));
  }, [dailyAssignments, rides, currentUser, role]);

  const handleDownloadRoster = () => {
    if (operators.length === 0) {
        alert("No operator data to download.");
        return;
    }

    const headers = ['Operator Name', 'Checked In', 'Attended Briefing', 'Briefing Time', 'Assigned Rides'];
    
    const rows = operatorsWithAttendance.map((operator: Operator & { attendance: AttendanceRecord | null }) => {
        const assignedRides = assignmentsByOperator.get(operator.id);
        const rideNames = assignedRides ? assignedRides.map(r => r.name).join('; ') : 'N/A';
        
        const checkedIn = operator.attendance ? 'Yes' : 'No';
        let attendedBriefing = 'N/A';
        let briefingTime = 'N/A';

        if(operator.attendance) {
            attendedBriefing = operator.attendance.attendedBriefing ? 'Yes' : 'No';
            // FIX: Match logic from TicketSalesRoster to avoid type inference issues with briefingTime.
            briefingTime = operator.attendance.attendedBriefing ? formatTime(operator.attendance.briefingTime) : 'N/A';
        }
        
        const operatorName = `"${operator.name.replace(/"/g, '""')}"`;
        const rideNamesCsv = `"${rideNames.replace(/"/g, '""')}"`;

        return [operatorName, checkedIn, attendedBriefing, briefingTime, rideNamesCsv].join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', `ToggiFunWorld_Roster_${selectedDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAttendanceReport = () => {
    if (operatorsWithAttendance.length === 0) {
        alert("No operator data to download.");
        return;
    }

    const headers = ['Operator Name', 'Status', 'Briefing Attended', 'Briefing Time'];
    
    const rows = operatorsWithAttendance.map((operator: Operator & { attendance: AttendanceRecord | null }) => {
        const status = operator.attendance ? 'Present' : 'Absent';
        let attendedBriefing = 'N/A';
        let briefingTime = 'N/A';

        if(operator.attendance) {
            attendedBriefing = operator.attendance.attendedBriefing ? 'Yes' : 'No';
            // FIX: Match logic from TicketSalesRoster to avoid type inference issues with briefingTime.
            briefingTime = operator.attendance.attendedBriefing ? formatTime(operator.attendance.briefingTime) : 'N/A';
        }
        
        const operatorName = `"${operator.name.replace(/"/g, '""')}"`;
        
        return [operatorName, status, attendedBriefing, briefingTime].join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', `ToggiFunWorld_Attendance_${selectedDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isRosterEmpty = operatorsWithAttendance.length === 0;
  const isManager = role === 'admin' || role === 'operation-officer';

  const [year, month, day] = selectedDate.split('-').map(s => parseInt(s, 10));
  const displayDate = new Date(year, month - 1, day);

  if (role === 'operator' && currentUser) {
    if (!hasCheckedInToday) {
        if (isCheckinAllowed) {
            return <BriefingCheckin operatorName={currentUser.name} onClockIn={onClockIn} />;
        } else {
            return (
                <div className="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-yellow-500 text-center animate-fade-in-up">
                    <h1 className="text-3xl font-bold text-yellow-400 mb-4">Check-in Closed for Today</h1>
                    <p className="text-lg text-gray-300">
                        The check-in window for today has closed at 10:00 PM.
                    </p>
                    <p className="text-lg text-gray-400 mt-2">
                        Check-in for the next day will be available after 12:00 AM.
                    </p>
                </div>
            );
        }
    }

    const myAssignedRides = assignmentsByOperator.get(currentUser.id) || [];
    const myAttendance = attendance.find(a => a.operatorId === currentUser.id && a.date === selectedDate);
    
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        My Roster for {displayDate.toLocaleDateString()}
                    </h1>
                    {myAttendance && (
                       <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
                            <span>
                                Checked In: <span className="font-semibold text-gray-200">{formatTime(myAttendance.briefingTime)}</span>
                                ({myAttendance.attendedBriefing ? <span className="text-teal-300">Briefing</span> : <span className="text-yellow-400">No Briefing</span>})
                            </span>
                       </div>
                    )}
                </div>
                <div className="flex items-center gap-2 bg-gray-700/50 p-2 rounded-lg">
                    <label htmlFor="roster-date" className="text-sm font-medium text-gray-300">View Date:</label>
                    <input
                        id="roster-date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => onDateChange(e.target.value)}
                        className="px-2 py-1 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
                    />
                </div>
            </div>

            {myAssignedRides.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {myAssignedRides.map(ride => (
                      <div key={ride.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-700 flex flex-col group">
                        <div className="relative">
                          <img src={ride.imageUrl} alt={ride.name} className="w-full h-48 object-cover" />
                           {isManager && (
                              <button 
                                  onClick={() => onShowModal('edit-image', ride)}
                                  className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                  aria-label="Change ride picture"
                              >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                  </svg>
                              </button>
                          )}
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <div className="flex-grow">
                            <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
                              {ride.floor} Floor
                            </span>
                            <h3 className="text-xl font-bold text-gray-100">{ride.name}</h3>
                          </div>
                          <Counter count={ride.count} onCountChange={(newCount) => onCountChange(ride.id, newCount)} />
                        </div>
                      </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-bold text-gray-400">No Assignments Today</h2>
                    <p className="text-gray-500 mt-2">You have not been assigned to any rides or games for {displayDate.toLocaleDateString()}.</p>
                </div>
            )}
            
            {operatorExpertise.length > 0 && (
                 <div className="mt-12">
                    <h2 className="text-2xl font-bold text-pink-500 mb-4">My Expertise</h2>
                    <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4">
                        <p className="text-gray-400 mb-4">Based on your assignment history, you have experience with the following rides/games:</p>
                        <ul className="columns-1 sm:columns-2 gap-x-6 text-gray-300">
                            {operatorExpertise.map(({ name, count }) => (
                                <li key={name} className="mb-2 flex justify-between items-center bg-gray-700/50 p-2 rounded-md break-inside-avoid">
                                    <span>{name}</span>
                                    <span className="ml-2 px-2.5 py-0.5 bg-purple-600 text-white text-xs font-semibold rounded-full">
                                        {count} {count > 1 ? 'days' : 'day'}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Daily Roster for {displayDate.toLocaleDateString()}
            </h1>
            {isManager && (
            <div className="flex items-center gap-6 mt-2 text-lg">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-green-400">Present:</span>
                    <span className="font-bold text-2xl text-gray-100">{presentCount}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-red-500">Absent:</span>
                    <span className="font-bold text-2xl text-gray-100">{absentCount}</span>
                </div>
            </div>
        )}
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
           <div className="flex items-center gap-2 bg-gray-700/50 p-2 rounded-lg">
                <label htmlFor="roster-date" className="text-sm font-medium text-gray-300">Date:</label>
                <input
                    id="roster-date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => onDateChange(e.target.value)}
                    className="px-2 py-1 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
                />
            </div>
           {isManager && (
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <div className="flex items-center gap-2 p-1 bg-gray-700/50 rounded-lg">
                  <button
                      onClick={handleDownloadAttendanceReport}
                      className="px-3 py-1.5 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 active:scale-95 transition-all text-sm"
                  >
                      DL Attendance
                  </button>
                  <button
                      onClick={handleDownloadRoster}
                      className="px-3 py-1.5 bg-green-800 text-white font-semibold rounded-md hover:bg-green-700 active:scale-95 transition-all text-sm"
                  >
                      DL Roster
                  </button>
                </div>
                <button
                  onClick={() => onNavigate('assignments')}
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all text-sm"
                >
                  Edit Assignments
                </button>
              </div>
            )}
        </div>
      </div>
      {isRosterEmpty ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-400">No Operator Data Found</h2>
          <p className="text-gray-500 mt-2">Please add operators via the Operator Management panel.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatorsWithAttendance.map(operator => {
              const operatorAssignments = assignmentsByOperator.get(operator.id);

              // If operator is absent, render a simplified card.
              if (!operator.attendance) {
                return (
                  <div key={operator.id} className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 flex flex-col justify-center">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold text-gray-500">{operator.name}</h2>
                      <div className="flex items-center gap-2 text-sm font-semibold text-red-500">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span>Absent</span>
                      </div>
                    </div>
                  </div>
                );
              }

              // If present, render the full card.
              return (
                <div key={operator.id} className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-purple-400">{operator.name}</h2>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
                      <span className="text-green-400">Checked In</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-400 mb-4 h-5">
                    {operator.attendance && (
                      <p>
                        Checked In: <span className="font-semibold text-gray-200">{formatTime(operator.attendance.briefingTime)}</span>
                        ({operator.attendance.attendedBriefing ? <span className="text-teal-300">Briefing</span> : <span className="text-yellow-400">No Briefing</span>})
                      </p>
                    )}
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-300 mb-2 border-t border-gray-700 pt-3">Assignments:</h3>
                    <ul className="space-y-2 text-sm">
                      {operatorAssignments && operatorAssignments.length > 0 ? (
                        operatorAssignments.map(ride => (
                          <li key={ride.id} className="text-gray-300 bg-gray-700/50 p-2 rounded-md">
                            {ride.name} <span className="text-xs text-gray-500">({ride.floor} Fl)</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-gray-500 italic">No assignments for this date</li>
                      )}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {unassignedRides.length > 0 && isManager && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-pink-500 mb-4">Unassigned Rides & Games</h2>
              <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4">
                <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-6">
                  {unassignedRides.map(ride => (
                    <li key={ride.id} className="text-gray-400 mb-2 break-inside-avoid">{ride.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DailyRoster;
