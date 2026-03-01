export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
    github?: string;
    caseStudy?: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
}
