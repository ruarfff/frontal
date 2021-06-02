export const theme = {
    colors: {
        themeColor: '#086AD8',
        themeColorBlack: '#333333',
        themeColorGreen: '#38cb89',
        textColor: '#696969',
        headingColor: '#333333',
        headingColorTwo: '#d2a98e',
        headingColorDefault: '#086AD8',
        subHeadingColor: '#6d70a6',
        borderColor: '#ededed',
        borderColorTwo: '#f8f8f8',
        borderDash: '#dddddd',
        white: '#ffffff',
        black: '#000000',
        primary: '#004395',
        secondary: '#d2a98e',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        bodyBgColor: '#ffffff',
        gray: '#F8F8F8',
        grayTwo: '#F6FAFE',
        grayThree: '#f6f2ed',
        silver: '#ababab',
        silverTwo: '#cccccc',
        kimberly: '#6d70a6',
        spring: '#F6F2ED',
        pattens: '#def0ff',
        yellow: '#ffb944',
        whiteSmoke: '#f5f5f5'
    },
    lineHieghts: {
        text: 1.74,
        heading: 1.41
    },
    fontFamily: {
        text: 'CerebriSans',
        heading: 'CerebriSans',
        fontAwesomePro: 'Font Awesome 5 Pro',
        fontAwesomeBrand: 'Font Awesome 5 Brands'
    },
    fontSizes: {
        text: '15px',
        h1: '56px',
        h2: '48px',
        h3: '40px',
        h4: '34px',
        h5: '24px',
        h6: '18px'
    },
    fontWeight: {
        text: 400,
        heading: 700
    },
    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
}

const size = {
    xxlarge: '1699px',
    xlarge: '1599px',
    large: '1199px',
    medium: '991px',
    small: '767px',
    xsmall: '575px',
    xxsmall: '480px',
    xxlargeOnly: '1700px',
    xlargeOnly: '1600px',
    largeOnly: '1200px',
    mediumOnly: '992px',
    smallOnly: '768px',
    xsmallOnly: '576px',
    xxsmallOnly: '481px'
}

export const device = {
    xxlarge: `(max-width: ${size.xxlarge})`,
    xlarge: `(max-width: ${size.xlarge})`,
    large: `(max-width: ${size.large})`,
    medium: `(max-width: ${size.medium})`,
    small: `(max-width: ${size.small})`,
    xsmall: `(max-width: ${size.xsmall})`,
    xxsmall: `(max-width: ${size.xxsmall})`,
    xxlargeOnly: `(min-width: ${size.xxlargeOnly})`,
    xlargeOnly: `(min-width: ${size.xlargeOnly})`,
    largeOnly: `(min-width: ${size.largeOnly})`,
    mediumOnly: `(min-width: ${size.mediumOnly})`,
    smallOnly: `(min-width: ${size.smallOnly})`,
    xsmallOnly: `(min-width: ${size.xsmallOnly})`,
    xxsmallOnly: `(min-width: ${size.xxsmallOnly})`
};