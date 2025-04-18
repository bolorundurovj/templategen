/**
 * Checks if the given project type requires an architecture pattern.
 *
 * @param {string} projectType - The type of the project (e.g., 'backend', 'fullstack', 'desktop', 'mobile').
 * @returns {boolean} - Returns true if the project type requires an architecture pattern, otherwise false.
 */
export const requiresArchitecturePattern = (projectType: string): boolean => {
  return ['backend', 'fullstack', 'desktop', 'mobile'].includes(projectType);
};

/**
 * Checks if the given project type requires a database.
 *
 * @param {string} projectType - The type of the project (e.g., 'backend', 'fullstack').
 * @returns {boolean} - Returns true if the project type requires a database, otherwise false.
 */
export const requiresDatabase = (projectType: string): boolean => {
  return ['backend', 'fullstack'].includes(projectType);
};
