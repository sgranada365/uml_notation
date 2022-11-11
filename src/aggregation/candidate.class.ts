import { Skill } from "./skill.class";

export class Candidate {
  private skills?: Skill[];
  private id: number;
  private name: string;
  private lastName: string;

  constructor(id: number, name: string, lastName: string, skills?: Skill[]) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.skills = skills;
  }

  getCandidateData(): {
    skills: Skill[];
    id: number;
    name: string;
    lastName: string;
  } {
    return {
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      skills: this.skills ?? [],
    };
  }
}
