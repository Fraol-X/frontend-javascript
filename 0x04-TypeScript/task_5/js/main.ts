// Define interfaces for MajorCredits and MinorCredits
interface MajorCredits {
    credits: number;
    brand: "major";
  }
  
  interface MinorCredits {
    credits: number;
    brand: "minor";
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, brand: "major" };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, brand: "minor" };
  }
  
  // Example usage
  const major1: MajorCredits = { credits: 30, brand: "major" };
  const major2: MajorCredits = { credits: 20, brand: "major" };
  
  const minor1: MinorCredits = { credits: 10, brand: "minor" };
  const minor2: MinorCredits = { credits: 15, brand: "minor" };
  
  console.log('Sum of Major Credits:', sumMajorCredits(major1, major2));
  console.log('Sum of Minor Credits:', sumMinorCredits(minor1, minor2));
  