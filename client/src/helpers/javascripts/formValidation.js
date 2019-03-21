export const validateName = (state) => {
    if (state.name.length <= 2) {
        this.setState({ 
            nameError: {
                invalid: 'true',
                text: 'Your name is weird!',
            } 
        });
    } else {
        this.setState({ 
            nameError: {
                invalid: false,
            } 
        });
    }
}