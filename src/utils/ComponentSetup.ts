export const componentSetup = {
  
    fetchTemplate: async (path: string): Promise<string> => {
        try {
          const response = await fetch(path);
          const html = await response.text();
          return html;
        } catch (error) {
          console.error(error);
          return "";
        }
      }
}
