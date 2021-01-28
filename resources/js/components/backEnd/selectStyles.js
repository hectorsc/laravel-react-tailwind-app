// Select validator style
export const selectStyles = {
   control: styles => ({ 
      ...styles, 
      borderColor: '#f98080', 
      '&:hover' : {
         borderColor: '#f98080'
      }, 
   }),
   placeholder: styles => ({
      ...styles, 
      color: 'rgba(224, 36, 36, var(--text-opacity))' 
   }),
};