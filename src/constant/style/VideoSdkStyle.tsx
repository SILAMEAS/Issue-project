export const VideoSdkStyle = (mainColor: string) => ({
  width: '90%',
  '& .eid-loading div': {
    borderColor: 'Primary.main',
  },
  '& .eid-a': {
    color: 'Primary.main',
    fontSize: '1.5em',
  },
  '& .eid-button': {
    borderRadius: '2rem',
    cursor: 'pointer',
    display: 'inline-block !important',
    fontSize: '1em !important',
    fontWeight: 'bold !important',
    lineHeight: '1.25em !important',
    padding: '0.625em 2em !important',
    textAlign: 'center !important',
    border: 'none !important',
    backgroundColor: 'Primary.main',
    color: `white !important`,
  },
  '& #video .eid-svg-container svg path': {
    stroke: mainColor,
  },
  '& #video .eid-title': {
    fontSize: '1.3em',
    fontWeight: '600',
    color: `black !important`,
  },
  '& #video .eid-idtype-selector': {
    backgroundColor: '#efefec',
    borderRadius: '20px !important',
    color: 'black !important',
    padding: '2rem',
  },
  '& #video .eid-idtype-selector .eid-description': {
    color: 'black  !important',
    fontSize: '1.3em',
    fontWeight: '600 !important',
  },
  '& #video .eid-idtype-selector .choices__inner ': {
    borderRadius: '10px !important',
  },
  '& #video .eid-row': {
    width: '100%',
    padding: '40px',
    borderRadius: '20px !important',
    backgroundColor: '#efefec',
  },
  '& #video .eid-row .eid-h5': {
    color: 'black !important',
    fontSize: '14px',
  },
  '& .eid-notification-modal': {
    borderRadius: '20px !important',
    display: 'flex',
    alignItems: 'center',
  },
  '& .eid-detection-canvas': {
    borderRadius: '20px !important',
  },
});
