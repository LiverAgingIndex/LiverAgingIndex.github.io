####====LAI-5=====####
###FunCctions for men*********
Men_calc_risk_mod2 <- function(dataset) {
  with(dataset, exp(
    0.115066198 * (CA - 65.9168209074) +
    -0.1788114109 * ((log(FAP_0) - 5.5071221923) / 0.1420367125 - (-0.0891832594)) +
    0.1447408612 * ((log(LSM_0) - 1.9427459692) / 0.3340647884 - (0.054902003)) +
    -0.0629680903 * ((log(ALT_0) - 3.0325008209) / 0.5479442922 - (0.1028497724)) +
    -0.0937019558  * ((log(AST_0) - 3.1381081033) / 0.5452344978 - (0.0315900256)) +
    0.3257307992 * ((log(GGT_0) - 3.1816713962) / 0.7738010956 - (0.2334980761))
    )
  )
}
riskMOD2 <- Men_calc_risk_mod2(MEN)
summary(riskMOD2-riskMod)
riskNull2 <- exp(0.1169298 * (MEN$CA-65.9168209074) )
summary(riskNull2-riskNull)
MRDTfit=6.02
ageBioDelta2 <-log(riskMOD2/riskNull2)/log(2)*MRDTfit  
summary(ageBioDelta2-ageBioDelta)
LAA_5=ageBioDelta2
LAI_5=ageBioDelta2+CA
###FunCctions for women*********
Women_calc_risk_mod2 <- function(dataset) {
  with(dataset, exp(
    0.1236448904 * (CA - 64.9203855128) +
    -0.0815917511 * ((log(FAP_0) - 5.5071221923) / 0.1420367125 - (0.0489636086)) +
    0.1108570214 * ((log(LSM_0) - 1.9427459692) / 0.3340647884 - (-0.0301424304)) +
    -0.1071219575 * ((log(ALT_0) - 3.0325008209) / 0.5479442922 - (-0.0564668306)) +
    -0.0495435376 * ((log(AST_0) - 3.1381081033) / 0.5452344978 - (-0.0173436322)) +
    0.2708418271 * ((log(GGT_0) - 3.1816713962) / 0.7738010956 - (-0.128195678))
    )
  )
}
riskMOD2 <- Women_calc_risk_mod2(Women)
riskNull2 <- exp(0.1270141 * (Women$CA-64.9203855128) )
MRDTfit=5.605951
ageBioDelta2 <-log(riskMOD2/riskNull2)/log(2)*MRDTfit  
LAA_5=ageBioDelta2
LAI_5=ageBioDelta2+CA

####====LAI-13=====####
###Functions for men*******
Men_calc_risk_mod2 <- function(dataset) {
  dataset <- dataset%>% mutate(
  score_VCTE = (log(FAP_0) - 5.507122)/0.142037*-0.002193 + 
  (log(LSM_0) - 1.942746)/0.334065*0.299431,
  score_Enzyme = (log(ALT_0) - 3.032501)/0.547944*-0.004549 + 
  (log(AST_0) - 3.138108)/0.545234*0.110991 + 
  (log(GGT_0) - 3.181671)/0.773801*0.615969,
  score_Lipid = (log(RPG_0) - 1.8251)/0.30559*0.001042 + 
  (log(TC_0) - 1.591961)/0.272531*-0.001089 + 
  (log(TG_0) - 0.528817)/0.642918*4.7e-05 + 
  (log(`HDL-C_0`) - 0.263495)/0.348643*-0.000186 + 
  (log(`LDL-C_0`) - 0.809155)/1.554747*-0.001038,
  score_Phy = (log(BMI_0) - 3.186939)/0.141285*0.01339 + 
  (log(SBP_0) - 4.880212)/0.155097*0.053321 + 
  (log(DBP_0) - 4.352143)/0.136714*-0.195234,
)

  with(dataset, exp(
    0.1222064374 * (CA - (65.9168209074)) +
    0.4883414574 * (score_VCTE - (0.0166349306)) +
    0.2922859346 * (score_Enzyme - (0.1468659071)) +
    18.5246583211 * (score_Lipid - (0.0002224992)) +
    -0.4856886885 * (score_Phy - (-0.0126545257))
    )
  )
}

riskMOD2 <- Men_calc_risk_mod2(MEN)
riskNull2 <- exp(0.1169298 * (MEN$CA-65.9168209074) )
ageBioDelta2 <-log(riskMOD2/riskNull2)/log(2)*5.671937  
LAA_13=ageBioDelta2
LAI_13=ageBioDelta2+CA

###Functions for women*******
Women_calc_risk_mod2 <- function(dataset) {
  dataset <- dataset%>% mutate(
  score_VCTE = (log(FAP_0) - 5.507122)/0.142037*-0.002193 + 
  (log(LSM_0) - 1.942746)/0.334065*0.299431,
  score_Enzyme = (log(ALT_0) - 3.032501)/0.547944*-0.004549 + 
  (log(AST_0) - 3.138108)/0.545234*0.110991 + 
  (log(GGT_0) - 3.181671)/0.773801*0.615969,
  score_Lipid = (log(RPG_0) - 1.8251)/0.30559*0.001042 + 
  (log(TC_0) - 1.591961)/0.272531*-0.001089 + 
  (log(TG_0) - 0.528817)/0.642918*4.7e-05 + 
  (log(`HDL-C_0`) - 0.263495)/0.348643*-0.000186 + 
  (log(`LDL-C_0`) - 0.809155)/1.554747*-0.001038,
  score_Phy = (log(BMI_0) - 3.186939)/0.141285*0.01339 + 
  (log(SBP_0) - 4.880212)/0.155097*0.053321 + 
  (log(DBP_0) - 4.352143)/0.136714*-0.195234,
)

  with(dataset, exp(
    0.129569714 * (CA - (64.9203855128)) +
    0.2904189766 * (score_VCTE - (-0.0091329498)) +
    0.200230793 * (score_Enzyme - (-0.0806326752)) +
    62.5522194374 * (score_Lipid - (-0.0001221571)) +
    -0.5156925707 * (score_Phy - (0.0069476183))
    )
  )
}

riskMOD2 <- Women_calc_risk_mod2(Women)
riskNull2 <- exp(0.1270141 * (Women$CA-64.9203855128) )
ageBioDelta2 <-log(riskMOD2/riskNull2)/log(2)*5.349608  
LAA_13=ageBioDelta2
LAI_13=ageBioDelta2+CA
