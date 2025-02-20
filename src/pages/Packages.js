import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import freeLancerImage from "../assets/packs/freelancer.jpg";
import ItImage from "../assets/packs/it.jpg";
import Imp_Exp_Image from "../assets/packs/import_export.jpg";
import contractorImage from "../assets/packs/contractor.jpg";
import ManufacturingImage from "../assets/packs/Manufacturing.jpg";
import i18n from "../i18n";

const Packages = () => {
  const { t } = useTranslation(); // Add translation hook
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedPackage = queryParams.get("selected");

  const packageContent = {
    freelancer: {
      title: t("hero.freelancerPack"),
      description:
        t("packages.freelancerDescription") ||
        "Best for independent professionals looking to grow their business.",
      features: [
        t("packages.taxFileOpening"),
        t("packages.freelanceAgreement"),
        t("packages.eInvoice"),
        t("packages.itLicense"),
        t("packages.partTimeForm"),
      ],
      price: i18n.language === "ar" ? "17,000 جنيه مصري" : "17,000 L.E",
      image: freeLancerImage,
    },
    IT_SW: {
      title: t("hero.IT&SWPack"),
      description:
        t("packages.itSoftwareDescription") ||
        "Designed for software companies and IT professionals.",
      features: [
        t("packages.saasAgreement"),
        t("packages.eInvoice"),
        t("packages.privacyPolicy"),
        t("packages.itLicense"),
        t("packages.msmRegistration"),
        t("packages.tradeMarkRegistration"),
        t("packages.freeIncorporation"),
      ],
      price: i18n.language === "ar" ? "35,000 جنيه مصري" : "35,000 L.E",
      image: ItImage,
    },
    Imp_Exp: {
      title: t("hero.Imp&ExpPack"),
      description:
        t("packages.importExportDescription") ||
        "Ideal for businesses involved in international trade.",
      features: [
        t("packages.importCard"),
        t("packages.exportCard"),
        t("packages.customsDealersRegister"),
        t("packages.egmForm"),
        t("packages.ogmForms"),
        t("packages.employmentStructure"),
        t("packages.vatAndMonthlyReturn"),
        t("packages.taxReturnAndBudget"),
        t("packages.annualBudget"),
        t("packages.eInvoice"),
        t("packages.tradeMarkRegistration"),
        t("packages.freeIncorporation"),
      ],
      price: i18n.language === "ar" ? "85,000 جنيه مصري" : "85,000 L.E",
      image: Imp_Exp_Image,
    },
    Contractor: {
      title: t("hero.ContractorPack"),
      description:
        t("packages.contractorDescription") ||
        "For construction and real estate contractors.",
      features: [
        t("packages.constructionAgreementDrafts"),
        t("packages.salariesForm"),
        t("packages.deductionCollectionForm"),
        t("packages.vatAndMonthlyReturn"),
        t("packages.efcbcRegistration"),
        t("packages.eInvoice"),
        t("packages.employmentStructure"),
        t("packages.annualBudget"),
        t("packages.insuranceFile"),
      ],
      price: i18n.language === "ar" ? "90,000 جنيه مصري" : "90,000 L.E",
      image: contractorImage,
    },
    Manufacturing: {
      title: t("hero.ManufacturingPack"),
      description:
        t("packages.manufacturingDescription") ||
        "For factories and large-scale production businesses.",
      features: [
        t("packages.b2bAgreementDrafts"),
        t("packages.operatingPermit"),
        t("packages.industrialRegister"),
        t("packages.egmForm"),
        t("packages.ogmForms"),
        t("packages.employmentStructure"),
        t("packages.msmRegistration"),
        t("packages.eInvoice"),
        t("packages.taxReturnAndBudget"),
        t("packages.salariesForm"),
        t("packages.deductionCollectionForm"),
      ],
      price: i18n.language === "ar" ? "155,000 جنيه مصري" : "155,000 L.E",
      image: ManufacturingImage,
    },
  };

  const content = packageContent[selectedPackage] || {
    title: t("packages.title") || "Our Packages",
    description:
      t("packages.selectPackage") || "Select a package to view details.",
    features: [],
    price: "N/A",
    image: "../assets/packs/default.jpg",
  };

  return (
    <div className={`package-page ${selectedPackage} container`}>
      {/* Hero Section */}
      <div className="hero-section layout-bg-theme text-white fw-bold">
        <div className="hero-content text-white">
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>
        <img src={content.image} alt={content.title} className="hero-image" />
      </div>

      {/* Package Card Section */}
      <div className="package-card">
        <h2>{content.title}</h2>
        <p className="package-price"> {content.price}</p>
        <ul className="package-features">
          {content.features.length > 0 ? (
            content.features.map((feature, index) => (
              <li key={index} className="feature-item">
                {feature}
              </li>
            ))
          ) : (
            <p className="no-selection">
              {t("packages.noSelection") ||
                "Please select a package from the homepage."}
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Packages;
