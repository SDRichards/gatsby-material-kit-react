// material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";

export default function Example(){
  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <CustomInput
                labelText="Disabled"
                id="disabled"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    disabled: true
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <CustomInput
                id="regular"
                inputProps={{
                    placeholder: "Regular"
                }}
                formControlProps={{
                    fullWidth: true
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <CustomInput
                labelText="With floating label"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <CustomInput
                labelText="Success input"
                id="success"
                success
                formControlProps={{
                    fullWidth: true
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <CustomInput
                labelText="Error input"
                id="error"
                error
                formControlProps={{
                    fullWidth: true
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <CustomInput
                labelText="With material Icons"
                id="material"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    endAdornment: (<InputAdornment position="end"><People/></InputAdornment>)
                }}
            />
        </GridItem>
    </GridContainer>
  );
}