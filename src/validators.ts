export const requiresArchitecturePattern = (projectType: string): boolean => {
    return ['backend', 'fullstack', 'desktop', 'mobile'].includes(projectType);
}
export const requiresDatabase = (projectType: string): boolean => {
    return ['backend', 'fullstack'].includes(projectType);
}
