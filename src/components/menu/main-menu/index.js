import React from "react";
import PropTypes from "prop-types";
import NavBar, { NavItem, NavLink, Submenu, Megamenu } from "@ui/navbar";
import Heading from "@ui/heading";
import { MainMenuWrap } from './mainmenu.style'

export const MainMenu = ({ headingStyle, menuData, ...props }) => {
	const menuarr = menuData;

	return (
		<MainMenuWrap {...props}>
			<NavBar>
				{menuarr.map(menu => {
					const submenu = menu.node.submenu ? menu.node.submenu : null;
					const megamenu = menu.node.megamenu ? menu.node.megamenu : null;
					return (
						<NavItem key={`mainmenu-${menu.node.id}`} hasSubmenu={submenu} hasMegamenu={megamenu}>
							<NavLink path={menu.node.link} hassubmenu={(submenu || megamenu) ? "true" : "false"}>
								<span>{menu.node.text}</span>
								{(submenu || megamenu) && <i className="icon fa fa-angle-down"></i>}
							</NavLink>
							{submenu && (
								<Submenu>
									{submenu.map((subitem, i) => {
										const hasSubmenuLevelTwo = subitem.isSubmenu;
										const submenuLevelTwo = subitem.submenu;
										const submenuIndex = i;
										return (
											<NavItem key={`submenu-${menu.node.id}-${submenuIndex}`}>
												<NavLink path={subitem.link}>
													<span>{subitem.text}</span>
													{hasSubmenuLevelTwo && <i className="icon fa fa-angle-down"></i>}
												</NavLink>
												{submenuLevelTwo && (
													<Submenu>
														{submenuLevelTwo.map((subitemLevelTwo, j) => {
															const subsubmenuIndex = j;
															return (
																<NavItem key={`submenu-${menu.node.id}-${submenuIndex}-${subsubmenuIndex}`}>
																	<NavLink path={subitemLevelTwo.link}>{subitemLevelTwo.text}</NavLink>
																</NavItem>
															)
														})}
													</Submenu>
												)}
											</NavItem>
										)
									})}
								</Submenu>
							)}
							{megamenu && (
								<Megamenu>
									{megamenu.map((megaitem, i) => {
										const megaSubmenu = megaitem.submenu;
										const megaIndex = i;
										return (
											<NavItem key={`megamenu-${menu.node.id}-${megaIndex}`}>
												<Heading {...headingStyle}>{megaitem.title}</Heading>
												{megaSubmenu && (
													<Submenu>
														{megaSubmenu.map((megaSubitem, i) => {
															return (
																<NavItem key={`megasubmenu-${megaIndex}-${i}`}>
																	<NavLink path={megaSubitem.link}>
																		<span>{megaSubitem.text}</span>
																	</NavLink>
																</NavItem>
															)
														})}
													</Submenu>
												)}
											</NavItem>
										)
									})}
								</Megamenu>
							)}
						</NavItem>
					)
				})}
			</NavBar>
		</MainMenuWrap>
	)
}

MainMenu.propTypes = {
	alignment: PropTypes.string,
	headingStyle: PropTypes.object
}

MainMenu.defaultProps = {
	alignment: 'center',
	headingStyle: {
		fontSize: '14px',
		mb: '20px',
		texttransform: 'uppercase'
	}
}