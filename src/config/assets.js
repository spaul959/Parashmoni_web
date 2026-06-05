const imagePath = (fileName) => `/assets/images/${fileName}`;

export const images = {
  logo: imagePath('logo.png'),
  hero: imagePath('mains.png'),
  doctor: imagePath('Dct.jpg'),
  patientReviews: [
    [imagePath('p1.png'), imagePath('p2.png')],
    [imagePath('p3.jpg'), imagePath('p4.jpg')],
    [imagePath('p5.jpg'), imagePath('p6.jpg')],
  ],
};
