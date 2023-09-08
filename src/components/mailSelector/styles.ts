const styles = {
  titleSize: {
    fontSize: 12
  },
  autoCompleteAvatar: {
    width: 27,
    height: 27,
    marginRight: 2
  },
  optionTypography: {
    fontSize: 12
  },
  paperBackground: {
    backgroundColor: "#f9f9f9",
    elevation: 2
  },
  textFieldStyles: {
    bgcolor: "#f9f9f9",
    borderRadius: 16,
    border: 'none',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: 'none',
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: 'none',
    },
    '& .MuiInputBase-input': {  
      fontSize: '0.75rem',
    },
  },
  gridPadding: {
    padding: 1
  }
};

export default styles;
