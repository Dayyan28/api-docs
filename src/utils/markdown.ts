export const loadMarkdownFile = async (path: string): Promise<string> => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${path}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return '# Error\nFailed to load documentation content.';
  }
};